export const revalidate = 3600;

const counties = [
  { slug: 'union-county', name: 'Union County' },
  { slug: 'morris-county', name: 'Morris County' },
  { slug: 'essex-county', name: 'Essex County' },
  { slug: 'hudson-county', name: 'Hudson County' },
  { slug: 'middlesex-county', name: 'Middlesex County' }
];

export default function Communities() {
  return (
    <main className="container">
      <h1>Communities</h1>
      <ul className="grid">
        {counties.map((c) => (
          <li key={c.slug}>
            <a className="tile" href={`/communities/${c.slug}`}>{c.name}</a>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .container { max-width: 1120px; margin: 0 auto; padding: 32px 20px; }
        .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 16px; }
        .tile { display: block; padding: 28px; border: 1px solid #eee; border-radius: 8px; background: #fff; }
      `}</style>
    </main>
  );
}
