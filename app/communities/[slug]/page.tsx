import { COUNTIES, TOWNS } from '@/content/communities.data';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export const revalidate = 3600;

export async function generateStaticParams() {
  return [...COUNTIES, ...TOWNS].map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const county = COUNTIES.find((c) => c.slug === params.slug);
  if (county) {
    return {
      title: `${county.name} Communities`,
      description: `Explore towns in ${county.name}, New Jersey.`
    };
  }
  const town = TOWNS.find((t) => t.slug === params.slug);
  if (town) {
    const countyName = COUNTIES.find((c) => c.slug === town.county)?.name;
    return {
      title: `${town.name}, ${countyName} Real Estate`,
      description: town.summary
    };
  }
  return { title: 'Community' };
}

export default function CommunityPage({ params }: { params: { slug: string } }) {
  const county = COUNTIES.find((c) => c.slug === params.slug);
  if (county) {
    const towns = TOWNS.filter((t) => t.county === county.slug);
    return (
      <div className="bg-black text-white min-h-screen [&_p]:text-white [&_li]:text-white">
        <main className="mx-auto max-w-[900px] p-8">
          <h1>{county.name}</h1>
          <ul className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4">
            {towns.map((t) => (
              <li key={t.slug}>
                <Link
                  className="block rounded-md bg-red-600 p-5 text-center text-white transition-colors hover:bg-red-700"
                  href={`/communities/${t.slug}`}
                >
                  {t.name}
                </Link>
                <p className="mt-2">{t.summary}</p>
              </li>
            ))}
          </ul>
        </main>
      </div>
    );
  }

  const town = TOWNS.find((t) => t.slug === params.slug);
  if (!town) return notFound();
  return (
    <div className="bg-black text-white min-h-screen [&_p]:text-white [&_li]:text-white">
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
    </div>
  );
}
