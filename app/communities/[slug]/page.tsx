import { notFound } from 'next/navigation';
import communities from '@/content/communities.json';

export const revalidate = 3600;

export default function CommunityPage({ params }: { params: { slug: string } }) {
  const county = communities.counties.find((c) => c.slug === params.slug);
  if (county) {
    return (
      <main className="mx-auto max-w-[900px] px-5 py-8">
        <h1>{county.name}</h1>
        <ul
          className="grid gap-4"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))' }}
        >
          {county.cities.map((city) => (
            <li key={city.slug}>
              <a
                className="block rounded-lg border border-gray-200 bg-white p-5"
                href={`/communities/${city.slug}`}
              >
                <strong>{city.name}</strong>
                <p className="mt-2 text-sm text-gray-600">{city.schools}</p>
              </a>
            </li>
          ))}
        </ul>
      </main>
    );
  }

  const city = communities.counties
    .flatMap((c) => c.cities)
    .find((c) => c.slug === params.slug);
  if (!city) return notFound();
  return (
    <main className="mx-auto max-w-[700px] px-5 py-8">
      <h1>{city.name}</h1>
      <section className="mt-6">
        <h2>Schools</h2>
        <p>{city.schools}</p>
      </section>
      <section className="mt-6">
        <h2>Public Transportation</h2>
        <p>{city.transportation}</p>
      </section>
      <section className="mt-6">
        <h2>NYC Commute</h2>
        <p>{city.commute}</p>
      </section>
    </main>
  );
}
