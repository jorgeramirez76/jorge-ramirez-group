import { COUNTIES } from '@/content/communities.data';

export const revalidate = 3600;

export default function Communities() {
  return (
    <main className="mx-auto max-w-[1120px] p-8">
      <h1>Communities</h1>
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4">
        {COUNTIES.map((c) => (
          <li key={c.slug}>
            <a
              className="block rounded-md border border-gray-200 bg-white p-7"
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
