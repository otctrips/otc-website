import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();
  console.log("[notify-signature] request body:", JSON.stringify(body));

  const {
    groupName,
    selectedHotel,
    selectedDates,
    totalPerPerson,
    totalCost,
    fullName,
    signedAt,
  } = body;

  const { data, error } = await resend.emails.send({
    from: "notifications@otctrips.com",
    to: "tylerdaley@otctrips.com",
    subject: `New Trip Confirmation - ${groupName}`,
    html: `
      <h2>New Trip Confirmation</h2>
      <table style="border-collapse:collapse;width:100%;max-width:500px">
        <tr><td style="padding:8px 0;color:#666;width:160px">Group</td><td style="padding:8px 0;font-weight:600">${groupName}</td></tr>
        <tr><td style="padding:8px 0;color:#666">Hotel</td><td style="padding:8px 0;font-weight:600">${selectedHotel}</td></tr>
        <tr><td style="padding:8px 0;color:#666">Dates</td><td style="padding:8px 0;font-weight:600">${selectedDates}</td></tr>
        <tr><td style="padding:8px 0;color:#666">Per Person</td><td style="padding:8px 0;font-weight:600">${totalPerPerson}</td></tr>
        <tr><td style="padding:8px 0;color:#666">Total Cost</td><td style="padding:8px 0;font-weight:600">${totalCost}</td></tr>
        <tr><td style="padding:8px 0;color:#666">Signed By</td><td style="padding:8px 0;font-weight:600">${fullName}</td></tr>
        <tr><td style="padding:8px 0;color:#666">Signed At</td><td style="padding:8px 0;font-weight:600">${signedAt}</td></tr>
      </table>
    `,
  });

  console.log("[notify-signature] resend response data:", JSON.stringify(data));
  console.log("[notify-signature] resend response error:", JSON.stringify(error));

  if (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  return NextResponse.json({ ok: true, data });
}
