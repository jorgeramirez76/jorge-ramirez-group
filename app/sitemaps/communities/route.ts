import { COUNTIES, TOWNS } from '@/content/communities.data';

export const runtime = 'edge';

export async function GET() {
  const base = 'https://www.thejorgeramirezgroup.com';
  const countySlugs = COUNTIES.map((c) => c.slug);
  const citySlugs = TOWNS.map((t) => t.slug);
  const urls = [
    '/communities',
    ...countySlugs.map((c) => `/communities/${c}`),
    ...citySlugs.map((c) => `/communities/${c}`)
  ]
    .map((p) => `<url><loc>${base}${p}</loc><changefreq>weekly</changefreq><priority>0.7</priority></url>`)
    .join('');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
    { headers: { 'content-type': 'application/xml' } }
  );
}
