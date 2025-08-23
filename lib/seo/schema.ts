export const agentSchema = (siteUrl: string) => ({
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'The Jorge Ramirez Group',
  url: siteUrl,
  telephone: '+1-908-230-7844',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '488 Springfield Ave',
    addressLocality: 'Summit',
    addressRegion: 'NJ',
    postalCode: '07901',
    addressCountry: 'US'
  },
  areaServed: [
    'Summit, NJ',
    'Short Hills, NJ',
    'Chatham, NJ',
    'Union County',
    'Morris County',
    'Essex County',
    'Hudson County',
    'Middlesex County',
    'Northern New Jersey',
    'Central New Jersey'
  ]
});

export const breadcrumb = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.name,
    item: it.url
  }))
});
