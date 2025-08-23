export const runtime = 'edge';

// Placeholder; when IDX is live, list each active listing page here.
const demo = ['/listings'];

export async function GET() {
  const base = 'https://www.thejorgeramirezgroup.com';
  const urls = demo
    .map((p) => `<url><loc>${base}${p}</loc><changefreq>hourly</changefreq><priority>0.8</priority></url>`)
    .join('');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
    { headers: { 'content-type': 'application/xml' } }
  );
}
