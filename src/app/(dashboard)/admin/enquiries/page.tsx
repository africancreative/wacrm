"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Mail, CheckCircle, Archive, Eye, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Enquiry {
  id: string;
  full_name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
  status: string;
  created_at: string;
}

type StatusFilter = "new" | "read" | "contacted" | "converted" | "archived" | "all";

const STATUS_LABELS: Record<string, string> = {
  new: "New",
  read: "Read",
  contacted: "Contacted",
  converted: "Converted",
  archived: "Archived",
};

const STATUS_COLORS: Record<string, string> = {
  new: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  read: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  contacted: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  converted: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  archived: "bg-slate-500/10 text-slate-400 border-slate-500/20",
};

export default function AdminEnquiriesPage() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const router = useRouter();

  const checkAdmin = useCallback(async () => {
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      router.push("/login");
      return;
    }
    const { data: profile } = await supabase
      .from("profiles")
      .select("email")
      .eq("user_id", user.id)
      .maybeSingle();

    if (!profile || profile.email !== "amisi@amisigenuine.com") {
      setIsAdmin(false);
      return;
    }
    setIsAdmin(true);
  }, [router]);

  const fetchEnquiries = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams();
      if (statusFilter !== "all") params.set("status", statusFilter);
      const res = await fetch(`/api/enquiries?${params.toString()}`);
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to fetch");
      }
      const data = await res.json();
      setEnquiries(data.enquiries);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }, [statusFilter]);

  useEffect(() => {
    checkAdmin();
  }, [checkAdmin]);

  useEffect(() => {
    if (isAdmin) fetchEnquiries();
  }, [isAdmin, fetchEnquiries]);

  const updateStatus = async (id: string, status: string) => {
    const supabase = createClient();
    await supabase.from("enquiries").update({ status }).eq("id", id);
    fetchEnquiries();
  };

  if (isAdmin === false) {
    return (
      <div className="flex h-screen items-center justify-center bg-slate-950">
        <p className="text-slate-400">Access denied. Admin only.</p>
      </div>
    );
  }

  const statuses: StatusFilter[] = ["all", "new", "read", "contacted", "converted", "archived"];
  const filtered = enquiries;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Enquiries</h1>
        <p className="mt-1 text-sm text-slate-400">
          Manage incoming CRM sign-up requests.
        </p>
      </div>

      {/* Status filter tabs */}
      <div className="flex flex-wrap gap-2">
        {statuses.map((s) => (
          <button
            key={s}
            onClick={() => setStatusFilter(s)}
            className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors ${
              statusFilter === s
                ? "border-primary bg-primary/10 text-primary"
                : "border-slate-700 text-slate-400 hover:border-slate-600 hover:text-slate-300"
            }`}
          >
            {s === "all" ? "All" : STATUS_LABELS[s]}
          </button>
        ))}
      </div>

      {/* Enquiries list */}
      {loading ? (
        <div className="space-y-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="animate-pulse rounded-xl border border-slate-800 bg-slate-900/50 p-5"
            >
              <div className="mb-2 h-4 w-48 rounded bg-slate-800" />
              <div className="h-3 w-32 rounded bg-slate-800" />
            </div>
          ))}
        </div>
      ) : error ? (
        <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-6 text-center text-sm text-red-400">
          {error}
        </div>
      ) : filtered.length === 0 ? (
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-12 text-center">
          <Mail className="mx-auto mb-3 h-8 w-8 text-slate-600" />
          <p className="text-sm text-slate-400">No enquiries found.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((enquiry) => (
            <div
              key={enquiry.id}
              className="rounded-xl border border-slate-800 bg-slate-900/50 p-5 transition-colors hover:border-slate-700"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-white">
                      {enquiry.full_name}
                    </h3>
                    <span
                      className={`rounded-full border px-2 py-0.5 text-[11px] font-medium ${STATUS_COLORS[enquiry.status] || STATUS_COLORS.new}`}
                    >
                      {STATUS_LABELS[enquiry.status] || enquiry.status}
                    </span>
                  </div>
                  <p className="mt-0.5 text-sm text-slate-400">
                    {enquiry.email}
                    {enquiry.company ? ` · ${enquiry.company}` : ""}
                    {enquiry.phone ? ` · ${enquiry.phone}` : ""}
                  </p>
                  {enquiry.message && (
                    <p className="mt-2 text-sm text-slate-300 line-clamp-2">
                      {enquiry.message}
                    </p>
                  )}
                  <p className="mt-2 text-xs text-slate-500">
                    {new Date(enquiry.created_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex shrink-0 items-center gap-1">
                  {enquiry.status === "new" && (
                    <button
                      onClick={() => updateStatus(enquiry.id, "read")}
                      className="rounded-lg p-2 text-slate-500 hover:bg-slate-800 hover:text-white"
                      title="Mark as read"
                    >
                      <Eye className="h-4 w-4" />
                    </button>
                  )}
                  {enquiry.status !== "contacted" && enquiry.status !== "converted" && (
                    <button
                      onClick={() => updateStatus(enquiry.id, "contacted")}
                      className="rounded-lg p-2 text-slate-500 hover:bg-slate-800 hover:text-amber-400"
                      title="Mark contacted"
                    >
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  )}
                  {enquiry.status === "contacted" && (
                    <button
                      onClick={() => updateStatus(enquiry.id, "converted")}
                      className="rounded-lg p-2 text-slate-500 hover:bg-slate-800 hover:text-emerald-400"
                      title="Mark converted"
                    >
                      <CheckCircle className="h-4 w-4" />
                    </button>
                  )}
                  {enquiry.status !== "archived" && (
                    <button
                      onClick={() => updateStatus(enquiry.id, "archived")}
                      className="rounded-lg p-2 text-slate-500 hover:bg-slate-800 hover:text-slate-400"
                      title="Archive"
                    >
                      <Archive className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
