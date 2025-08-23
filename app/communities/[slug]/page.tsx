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
      <main className="container">
        <h1>{county.name}</h1>
        <ul className="grid">
          {towns.map((t) => (
            <li key={t.slug}>
              <a className="tile" href={`/communities/${t.slug}`}>
                {t.name}
              </a>
              <p>{t.summary}</p>
            </li>
          ))}
        </ul>
        <style jsx>{`
          .container { max-width: 900px; margin: 0 auto; padding: 32px 20px; }
          .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 16px; }
          .tile { display: block; padding: 20px; border: 1px solid #eee; border-radius: 8px; background: #fff; }
        `}</style>
      </main>
    );
  }

  const town = TOWNS.find((t) => t.slug === params.slug);
  if (!town) return notFound();
  return (
    <main className="container">
      <h1>{town.name}</h1>
      <p>{town.description}</p>
      <section>
        <h2>Schools</h2>
        <p>{town.schools}</p>
      </section>
      <section>
        <h2>Commute to NYC</h2>
        <p>{town.commute}</p>
      </section>
      <style jsx>{`
        .container { max-width: 800px; margin: 0 auto; padding: 32px 20px; }
        section { margin-top: 24px; }
      `}</style>
    </main>
  );
}
