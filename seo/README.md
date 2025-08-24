# SEO Bundle (Next.js)

Drop the `seo/` folder into your Next.js repo (e.g., `src/seo/`), then import each page's SEO component at the top of the corresponding page.

## App Router Usage

```tsx
// app/(public)/buy/page.tsx
import PageSeo from "@/seo/components/page-seo/buy";
export default function BuyPage() {
  return (
    <>
      <PageSeo />
      {/* page content */}
    </>
  );
}
```

