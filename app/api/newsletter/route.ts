import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const form = await req.formData();
  const email = String(form.get("email") || "");
  // TODO: subscribe 'email' via ESP API key in env
  return NextResponse.json({ ok: true, email });
}
