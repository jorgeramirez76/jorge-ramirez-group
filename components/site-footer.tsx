import Link from "next/link";
import { siteConfig } from "@/lib/site";
export function SiteFooter() {
  return (
    <footer className="border-t mt-20">
      <div className="container py-10 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-3">
  <img src="/images/logo/logo-primary.png" alt="The Jorge Ramirez Group" className="h-8 w-auto" />
</div>
          <p className="mt-2 text-sm text-neutral-600">{siteConfig.tagline}</p>
          <p className="mt-4 text-sm">Keller Williams Premier Properties, Lic. # 1754604</p>
          <p className="mt-2 text-sm">488 Springfield Ave, Summit, NJ 07901</p>
          <p className="mt-2 text-sm"><a href={`tel:${siteConfig.phoneRaw}`}>{siteConfig.phoneDisplay}</a> • <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></p>
        </div>
        <div className="text-sm">
          <div className="font-medium">Explore</div>
          <ul className="mt-3 space-y-2">
            <li><Link href="/buy">Buy</Link></li>
            <li><Link href="/sell">Sell</Link></li>
            <li><Link href="/communities">Communities</Link></li>
            <li><Link href="/listings">Listings</Link></li>
          </ul>
        </div>
        <div className="text-sm">
          <div className="font-medium">Legal</div>
          <ul className="mt-3 space-y-2">
            <li><Link href="/legal/privacy">Privacy</Link></li>
            <li><Link href="/legal/terms">Terms</Link></li>
            <li><Link href="/legal/fair-housing">Fair Housing</Link></li>
            <li><Link href="/legal/ada">ADA</Link></li>
          </ul>
          <p className="mt-4 text-neutral-500 text-xs">© {new Date().getFullYear()} {siteConfig.shortName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}