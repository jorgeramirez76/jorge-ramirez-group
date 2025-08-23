# The Jorge Ramirez Group — Luxury NJ Real Estate (Next.js)

A modern, luxury real estate website built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and custom UI components inspired by shadcn/ui patterns.

## Quick Start

```bash
# 1) Install deps
npm install

# 2) Run dev server
npm run dev

# 3) Build & start
npm run build && npm start
```

> Deploy easily on **Vercel**. Connect this repo and press Deploy.

## Environment Variables

Create a `.env.local` (copy from `.env.example`) for integrations:

```
LEAD_WEBHOOK_URL=
MAILCHIMP_API_KEY=
HUBSPOT_API_KEY=
GHL_WEBHOOK_URL=
GA4_MEASUREMENT_ID=
GTM_ID=
```

## Content Editing

- Edit copy in `/content/*.json`
- Listings live in `/content/listings.json`
- Testimonials in `/content/testimonials.json`
- Images in `/public/images/*` (use WebP if possible)

## Pages & IA

- `/` Home
- `/buy` (includes commuter rail map)
- `/sell`
- `/communities`
- `/listings` and `/listings/[slug]`
- `/about`
- `/resources`
- `/contact`
- `/legal/*` (privacy, terms, fair-housing, ADA)

## SEO

- `app/robots.txt/route.ts`
- `app/sitemap.xml/route.ts`
- Open Graph defaults in `app/layout.tsx`
- Organization JSON‑LD in `components/seo/jsonld-organization.tsx`

## Accessibility & Performance

- High contrast palette (black/white with red accent)
- Focus styles, skip link, semantic sections
- Images optimized as WebP placeholders

## Add Real shadcn/ui (optional)

This project ships with lightweight UI components. If you want full shadcn/ui:

```bash
npx shadcn-ui@latest init
# then add components as needed
```

## DNS & Vercel

1. Deploy on Vercel.
2. Add your domain (e.g., nextmovejersey.com) in Vercel > Project Settings > Domains.
3. If your DNS is at GoDaddy/Cloudflare, add the CNAME to `cname.vercel-dns.com`.
4. Wait for propagation, then set the domain as primary.

## Credits

- Placeholder images are generated locally. Replace with your uploads or licensed/royalty‑free images and document sources in `/credits.md`.