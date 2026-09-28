import { Resend } from "resend";
import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

const resend = new Resend(process.env.RESEND_API_KEY);

const FIELDS: [key: string, label: string][] = [
  ["firstName", "First Name"],
  ["lastName", "Last Name"],
  ["email", "Email"],
  ["phone", "Phone"],
  ["organization", "Organization"],
  ["tripType", "Trip Type"],
  ["groupSize", "Group Size"],
  ["destination", "Destination"],
  ["startDate", "Start Date"],
  ["endDate", "End Date"],
  ["notes", "Notes"],
];

// Form input is user-supplied, so escape it before putting it in the email HTML
const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const value = (key: string) => String(body[key] ?? "").trim();

  const rows = FIELDS.map(([key, label]) => {
    const v = value(key);
    const display = v ? escapeHtml(v).replace(/\n/g, "<br>") : `<span style="color:#999">—</span>`;
    return `<tr><td style="padding:8px 0;color:#666;width:160px;vertical-align:top">${label}</td><td style="padding:8px 0;font-weight:600">${display}</td></tr>`;
  }).join("");

  const name = `${value("firstName")} ${value("lastName")}`.trim() || "Unknown";
  const organization = value("organization");
  const email = value("email");

  // Save the lead first so it survives an email failure. The id is generated here
  // because the anon key can't read rows back from quote_requests.
  const requestId = crypto.randomUUID();
  const { error: insertError } = await supabase.from("quote_requests").insert({
    id: requestId,
    first_name: value("firstName"),
    last_name: value("lastName"),
    email,
    phone: value("phone"),
    organization,
    trip_type: value("tripType"),
    group_size: value("groupSize"),
    destination: value("destination"),
    start_date: value("startDate"),
    end_date: value("endDate"),
    notes: value("notes"),
    email_sent: false,
  });
  const saved = !insertError;
  if (insertError) {
    console.error("[quote-request] supabase insert error:", JSON.stringify(insertError));
  }

  let emailError: unknown = null;
  try {
    const { error } = await resend.emails.send({
      from: "notifications@otctrips.com",
      to: "tdmvofficial@otctrips.com",
      ...(email ? { replyTo: email } : {}),
      subject: `New Quote Request - ${name}${organization ? ` (${organization})` : ""}`,
      html: `
        <h2>New Quote Request</h2>
        <table style="border-collapse:collapse;width:100%;max-width:500px">
          ${rows}
        </table>
      `,
    });
    emailError = error;
  } catch (err) {
    emailError = err instanceof Error ? err.message : err;
  }
  const emailSent = !emailError;
  if (emailError) {
    console.error("[quote-request] resend error:", JSON.stringify(emailError));
  }

  if (saved && emailSent) {
    const { error: markError } = await supabase.rpc("mark_quote_request_email_sent", { request_id: requestId });
    if (markError) {
      console.error("[quote-request] failed to mark email_sent:", JSON.stringify(markError));
    }
  }

  // The lead is safe as long as it was either saved or emailed
  if (!saved && !emailSent) {
    return NextResponse.json({ error: "Could not save or send quote request" }, { status: 500 });
  }

  return NextResponse.json({ ok: true, saved, emailSent });
}
