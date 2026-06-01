import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import {
  sendEnquiryNotification,
  sendEnquiryConfirmation,
} from "@/lib/email/mailtrap";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { full_name, email, company, phone, message } = body;

    if (!full_name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 },
      );
    }

    const supabase = await createClient();

    const { data, error } = await supabase
      .from("enquiries")
      .insert({
        full_name,
        email,
        company: company || "",
        phone: phone || "",
        message: message || "",
      })
      .select()
      .single();

    if (error) {
      console.error("[POST /api/enquiries] insert error:", error);
      return NextResponse.json(
        { error: "Failed to submit enquiry" },
        { status: 500 },
      );
    }

    // Fire-and-forget email notifications
    Promise.all([
      sendEnquiryNotification(data).catch((e) =>
        console.error("[email] notification failed:", e),
      ),
      sendEnquiryConfirmation(data).catch((e) =>
        console.error("[email] confirmation failed:", e),
      ),
    ]);

    return NextResponse.json({ success: true, id: data.id });
  } catch (err) {
    console.error("[POST /api/enquiries] unexpected error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

export async function GET(request: Request) {
  try {
    const supabase = await createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Only the admin email can view enquiries
    const { data: profile } = await supabase
      .from("profiles")
      .select("email")
      .eq("user_id", user.id)
      .maybeSingle();

    if (!profile || profile.email !== "amisi@amisigenuine.com") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status");

    let query = supabase
      .from("enquiries")
      .select("*")
      .order("created_at", { ascending: false });

    if (status) {
      query = query.eq("status", status);
    }

    const { data, error } = await query;

    if (error) {
      console.error("[GET /api/enquiries] query error:", error);
      return NextResponse.json(
        { error: "Failed to fetch enquiries" },
        { status: 500 },
      );
    }

    return NextResponse.json({ enquiries: data });
  } catch (err) {
    console.error("[GET /api/enquiries] unexpected error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
