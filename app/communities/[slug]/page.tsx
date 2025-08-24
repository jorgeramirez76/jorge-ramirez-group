import { COUNTIES, TOWNS } from '@/content/communities.data';
import { notFound } from 'next/navigation';

export const revalidate = 3600;

export async function generateStaticParams() {
  return [...COUNTIES, ...TOWNS].map((item) => ({ slug: item.slug }));
}

export default function CommunityPage({ params }: { params: { slug: string } }) {
  const county = COUNTIES.find((c) => c.slug === params.slug);
  if (county) {
    const towns = TOWNS.filter((t) => t.county === county.slug);
    return (
      <main className="mx-auto max-w-[900px] p-8">
        <h1>{county.name}</h1>
        <ul className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4">
          {towns.map((t) => (
            <li key={t.slug}>
              <a
                className="block rounded-md border border-gray-200 bg-white p-5"
                href={`/communities/${t.slug}`}
              >
                {t.name}
              </a>
              <p>{t.summary}</p>
            </li>
          ))}
        </ul>
      </main>
    );
  }

  const town = TOWNS.find((t) => t.slug === params.slug);
  if (!town) return notFound();
  return (
    <main className="mx-auto max-w-[800px] p-8">
      <h1>{town.name}</h1>
      <p>{town.description}</p>
      <section className="mt-6">
        <h2>Schools</h2>
        <p>{town.schools}</p>
      </section>
      <section className="mt-6">
        <h2>Commute to NYC</h2>
        <p>{town.commute}</p>
      </section>
    </main>
  );
}
