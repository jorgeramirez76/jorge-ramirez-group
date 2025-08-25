import { COUNTIES } from "@/content/communities.data";
import Image from "next/image";

export const revalidate = 3600;

export default function Communities() {
  return (
    <main className="mx-auto max-w-[1120px] p-8">
      <h1>Communities</h1>
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4">
        {COUNTIES.map((c) => (
          <li key={c.slug}>
            <a
              href={`/communities/${c.slug}`}
              className="block overflow-hidden rounded-md border border-gray-200"
            >
              <div className="relative aspect-square">
                <Image
                  src={c.image}
                  alt={c.name}
                  fill
                  sizes="100%"
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white font-semibold">
                  {c.name}
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
