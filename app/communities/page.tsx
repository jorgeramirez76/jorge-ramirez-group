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
    <main className="container max-w-[1120px] mx-auto px-5 py-8">
      <h1>Communities</h1>
      <ul className="grid [grid-template-columns:repeat(auto-fill,minmax(240px,1fr))] gap-4">
        {counties.map((c) => (
          <li key={c.slug}>
            <a
              className="block p-7 border border-gray-200 rounded-lg bg-white"
              href={`/communities/${c.slug}`}
            >
              {c.name}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
