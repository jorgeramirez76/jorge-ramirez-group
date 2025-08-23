export const runtime = 'edge';

export async function GET() {
  const base = 'https://www.thejorgeramirezgroup.com';
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap><loc>${base}/sitemaps/pages</loc></sitemap>
  <sitemap><loc>${base}/sitemaps/communities</loc></sitemap>
  <sitemap><loc>${base}/sitemaps/listings</loc></sitemap>
</sitemapindex>`;
  return new Response(xml, { headers: { 'content-type': 'application/xml' } });
}
