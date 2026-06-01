import nodemailer from "nodemailer";

export interface SendEmailParams {
  to: string;
  subject: string;
  html: string;
}

let transporter: nodemailer.Transporter | null = null;

function getTransporter(): nodemailer.Transporter {
  if (transporter) return transporter;

  transporter = nodemailer.createTransport({
    host: process.env.MAILTRAP_HOST || "sandbox.smtp.mailtrap.io",
    port: Number(process.env.MAILTRAP_PORT) || 2525,
    auth: {
      user: process.env.MAILTRAP_USER,
      pass: process.env.MAILTRAP_PASS,
    },
  });

  return transporter;
}

export async function sendEmail({ to, subject, html }: SendEmailParams) {
  const from =
    process.env.MAILTRAP_FROM || "Amisi Genuine CRM <noreply@amisigenuine.com>";

  const info = await getTransporter().sendMail({
    from,
    to,
    subject,
    html,
  });

  return info;
}

export async function sendEnquiryNotification(enquiry: {
  full_name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}) {
  const adminEmail = "amisi@amisigenuine.com";

  await sendEmail({
    to: adminEmail,
    subject: `New CRM Enquiry from ${enquiry.full_name}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
        <h2 style="color:#8b5cf6;">New Enquiry — Amisi Genuine CRM</h2>
        <table style="width:100%;border-collapse:collapse;margin-top:16px;">
          <tr><td style="padding:8px 0;color:#64748b;font-weight:600;">Name</td><td style="padding:8px 0;">${enquiry.full_name}</td></tr>
          <tr><td style="padding:8px 0;color:#64748b;font-weight:600;">Email</td><td style="padding:8px 0;">${enquiry.email}</td></tr>
          <tr><td style="padding:8px 0;color:#64748b;font-weight:600;">Company</td><td style="padding:8px 0;">${enquiry.company}</td></tr>
          <tr><td style="padding:8px 0;color:#64748b;font-weight:600;">Phone</td><td style="padding:8px 0;">${enquiry.phone}</td></tr>
          <tr><td style="padding:8px 0;color:#64748b;font-weight:600;">Message</td><td style="padding:8px 0;">${enquiry.message}</td></tr>
        </table>
        <hr style="border:none;border-top:1px solid #e2e8f0;margin:24px 0;" />
        <p style="color:#94a3b8;font-size:13px;">Sent from your CRM contact form.</p>
      </div>
    `,
  });
}

export async function sendEnquiryConfirmation(enquiry: {
  full_name: string;
  email: string;
}) {
  await sendEmail({
    to: enquiry.email,
    subject: "We received your enquiry — Amisi Genuine CRM",
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
        <h2 style="color:#8b5cf6;">Thank you, ${enquiry.full_name}!</h2>
        <p style="color:#334155;line-height:1.6;">We've received your enquiry and will get back to you within 24 hours.</p>
        <p style="color:#334155;line-height:1.6;">In the meantime, feel free to explore more about Amisi Genuine CRM on our website.</p>
        <hr style="border:none;border-top:1px solid #e2e8f0;margin:24px 0;" />
        <p style="color:#94a3b8;font-size:13px;">Amisi Genuine Enterprises — WhatsApp CRM Solutions</p>
      </div>
    `,
  });
}
