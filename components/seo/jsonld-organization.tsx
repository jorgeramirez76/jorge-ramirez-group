import Script from "next/script";
import { siteConfig } from "@/lib/site";
export function JsonLdOrganization() {
  const data = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: siteConfig.phoneDisplay,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "488 Springfield Ave",
      addressLocality: "Summit",
      addressRegion: "NJ",
      postalCode: "07901",
      addressCountry: "US",
    },
    areaServed: [
      "Union County",
      "Morris County",
      "Essex County",
      "Middlesex County",
      "Hudson County",
    ],
    image: "https://placehold.co/600x400",
  };
  return (
    <Script
      id="jsonld-org"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
