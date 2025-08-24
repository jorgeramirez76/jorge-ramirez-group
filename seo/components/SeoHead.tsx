import Head from "next/head";

export default function SeoHead({
  title,
  description,
  canonical,
  image = "https://www.thejorgeramirezgroup.com/og-image.jpg",
}: {
  title: string;
  description: string;
  canonical: string;
  image?: string;
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}

