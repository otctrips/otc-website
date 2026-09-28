import { Resend } from "resend";
import { NextResponse } from "next/server";

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

  const { data, error } = await resend.emails.send({
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

  if (error) {
    console.error("[quote-request] resend error:", JSON.stringify(error));
    return NextResponse.json({ error }, { status: 500 });
  }

  return NextResponse.json({ ok: true, data });
}
