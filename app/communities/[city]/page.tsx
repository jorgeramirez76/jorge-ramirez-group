import KeyFacts from '@/components/seo/KeyFacts';
import { notFound } from 'next/navigation';

export const revalidate = 3600;

const cities: Record<string, { name: string; facts: string[] }> = {
  'summit-nj': {
    name: 'Summit, NJ',
    facts: [
      'Median single-family price: $1.4M–$1.8M (varies by year/quarter)',
      'Midtown Direct to NYC from Summit Station',
      'Top-rated schools; strong resale fundamentals'
    ]
  },
  'short-hills-nj': {
    name: 'Short Hills, NJ',
    facts: ['Luxury inventory with commuter access', 'Highly ranked schools and amenities']
  }
};

export default function CityPage({ params }: { params: { city: string } }) {
  const data = cities[params.city];
  if (!data) return notFound();
  return (
    <main className="max-w-[900px] mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">{data.name}</h1>
      <section>
        <h2>Overview</h2>
        <p>Balanced mix of classic colonials and modern builds, close to commuter rail and top schools.</p>
      </section>
      <section>
        <h2>Schools & Commute</h2>
        <p>Public schools with strong ratings; Midtown Direct trains offer fast NYC access.</p>
      </section>
      <KeyFacts items={data.facts} />
      <p>
        <a
          className="inline-block px-4 py-3 bg-[#cc0000] text-white rounded-md"
          href={`/contact?subject=${encodeURIComponent(`Moving to ${data.name}`)}`}
        >
          Ask About {data.name} Housing
        </a>
      </p>
    </main>
  );
}
