import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const form = await req.formData();
  const payload = Object.fromEntries(form.entries());
  // TODO: Forward to CRM/ESP (Mailchimp/HubSpot/GHL) using env keys
  // await fetch(process.env.LEAD_WEBHOOK_URL!, { method: "POST", body: JSON.stringify(payload) });
  return NextResponse.json({ ok: true, received: payload });
}