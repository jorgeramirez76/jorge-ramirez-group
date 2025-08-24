export const runtime = 'edge';

const staticPages = [
  '/',
  '/about',
  '/contact',
  '/sell',
  '/buy',
  '/communities',
  '/listings',
  '/privacy-policy',
  '/terms',
  '/fair-housing',
  '/legal/ada'
];

export async function GET() {
  const base = 'https://www.thejorgeramirezgroup.com';
  const urls = staticPages
    .map(
      (p) =>
        `<url><loc>${base}${p}</loc><changefreq>${p === '/' ? 'daily' : 'weekly'}</changefreq><priority>${
          p === '/' ? 1 : 0.7
        }</priority></url>`
    )
    .join('');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
    { headers: { 'content-type': 'application/xml' } }
  );
}
