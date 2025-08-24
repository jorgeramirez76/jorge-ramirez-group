import SeoHead from "../SeoHead";
import SeoJsonLd from "../SeoJsonLd";

const SITE = "https://www.thejorgeramirezgroup.com";

export default function PageSeo() {
  const meta = {
    title: "Central & Northern NJ Realtor | The Jorge Ramirez Group",
    description:
      "Trusted real estate advisors for Union, Morris, Essex, Hudson & Middlesex. Buy or sell with confidence. Schools, taxes & NYC commute guidance.",
    canonical: `${SITE}/`.replace(/\/$/, ""),
    h1: "Sell for More. Buy with Confidence.",
  };

  const crumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
    ],
  };

  const faqEntries = [
    {
      q: "Which NJ counties do you serve?",
      a: "Union, Morris, Essex, Hudson, and Middlesex.",
    },
    {
      q: "Do you help NYC commuters?",
      a: "Yes—rail/bus commute mapping for each town.",
    },
    {
      q: "Can you estimate my home’s value?",
      a: "Yes—data-backed valuation and listing plan.",
    },
  ];
  const faqJsonLd =
    faqEntries && faqEntries.length
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqEntries.map(({ q, a }) => ({
            "@type": "Question",
            name: q,
            acceptedAnswer: { "@type": "Answer", text: a },
          })),
        }
      : null;

  const business = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "RealEstateAgent"],
    name: "The Jorge Ramirez Group",
    url: SITE,
    telephone: "+1-908-230-7844",
    address: {
      "@type": "PostalAddress",
      streetAddress: "488 Springfield Ave",
      addressLocality: "Summit",
      addressRegion: "NJ",
      postalCode: "07901",
      addressCountry: "US",
    },
  };

  return (
    <>
      <SeoHead
        title={meta.title}
        description={meta.description}
        canonical={meta.canonical}
      />
      <SeoJsonLd jsonLd={crumbs} />
      {faqJsonLd ? <SeoJsonLd jsonLd={faqJsonLd} /> : null}
      <SeoJsonLd jsonLd={business} />
      <h1 className="sr-only">{meta.h1}</h1>
    </>
  );
}

