import { NextResponse } from "next/server";
export function GET() {
  const body = `User-agent: *\nAllow: /\nSitemap: https://www.nextmovejersey.com/sitemap.xml`;
  return new NextResponse(body, { headers: { "Content-Type": "text/plain" } });
}