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
    <main className="mx-auto max-w-[1120px] px-5 py-8">
      <h1>Communities</h1>
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4">
        {counties.map((c) => (
          <li key={c.slug}>
            <a
              className="block rounded-lg border border-gray-200 bg-white p-7"
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
