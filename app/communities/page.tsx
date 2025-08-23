export const revalidate = 3600;

import communities from '@/content/communities.json';

const counties = communities.counties;

export default function Communities() {
  return (
    <main className="mx-auto max-w-[1120px] px-5 py-8">
      <h1>Communities</h1>
      <ul
        className="grid gap-4"
        style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))' }}
      >
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
