export const runtime = 'edge';

import communities from '@/content/communities.json';

const counties = communities.counties.map((c) => c.slug);
const cities = communities.counties.flatMap((c) => c.cities.map((city) => city.slug));

export async function GET() {
  const base = 'https://www.thejorgeramirezgroup.com';
  const urls = [
    '/communities',
    ...counties.map((c) => `/communities/${c}`),
    ...cities.map((c) => `/communities/${c}`)
  ]
    .map((p) => `<url><loc>${base}${p}</loc><changefreq>weekly</changefreq><priority>0.7</priority></url>`)
    .join('');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
    { headers: { 'content-type': 'application/xml' } }
  );
}
