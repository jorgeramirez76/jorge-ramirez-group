import { NextResponse } from "next/server";
import { sendEmail } from '@/lib/email';

export async function POST(req: Request) {
  const form = await req.formData();
  const payload = Object.fromEntries(form.entries());
  try {
    if (process.env.LEAD_WEBHOOK_URL) {
      await fetch(process.env.LEAD_WEBHOOK_URL, { method: 'POST', body: JSON.stringify(payload) });
    }
    const text = Object.entries(payload)
      .map(([k, v]) => `${k}: ${v}`)
      .join('\n');
    await sendEmail(`Listing Lead: ${payload.interest ?? ''}`, text);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}