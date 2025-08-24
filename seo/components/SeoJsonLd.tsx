import Head from "next/head";

export default function SeoJsonLd({ jsonLd }: { jsonLd: object }) {
  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Head>
  );
}

