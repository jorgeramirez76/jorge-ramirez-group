import KeyFacts from '@/components/seo/KeyFacts';
import { notFound } from 'next/navigation';

export const revalidate = 3600;

const cities: Record<string, { name: string; facts: string[] }> = {
  'summit-nj': {
    name: 'Summit, NJ',
    facts: [
      'Median single-family price: $1.4M–$1.8M (varies by year/quarter)',
      'Midtown Direct to NYC from Summit Station',
      'Top-rated schools; strong resale fundamentals',
    ],
  },
  'short-hills-nj': {
    name: 'Short Hills, NJ',
    facts: ['Luxury inventory with commuter access', 'Highly ranked schools and amenities'],
  },
};

export default function CityPage({ params }: { params: { city: string } }) {
  const data = cities[params.city];
  if (!data) return notFound();
  return (
    <main className="container">
      <h1>{data.name}</h1>
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
        <a className="cta" href={`/contact?subject=${encodeURIComponent(`Moving to ${data.name}`)}`}>
          Ask About {data.name} Housing
        </a>
      </p>
      <style jsx>{`
        .container { max-width: 900px; margin: 0 auto; padding: 32px 20px; }
        .cta { display: inline-block; padding: 12px 16px; background: #cc0000; color: #fff; border-radius: 6px; }
      `}</style>
    </main>
  );
}
