'use client';
import { useState } from 'react';
import Link from 'next/link';
import { RailMap } from '@/components/rail-map';
import { trainLines, TrainLine } from '@/lib/train-lines';
import { TOWNS } from '@/content/communities.data';

const townSlugMap = new Map(TOWNS.map((t) => [t.name.toLowerCase(), t.slug]));

export default function CommutingGuide() {
  const [selected, setSelected] = useState<TrainLine>(trainLines[0]);

  return (
    <section className="bg-black text-white">
      <div className="container py-16">
        <div className="max-w-2xl">
          <p className="uppercase text-sm tracking-wider text-neutral-400">Commuting Guide</p>
          <h1 className="mt-2 font-serif text-4xl md:text-5xl">NJ Transit to NYC</h1>
          <p className="mt-4 text-neutral-400">
            Explore convenient commuting options from New Jersey&apos;s premier communities to New York City. Hover or click on transit lines to see the towns they serve.
          </p>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
            <h2 className="font-serif text-2xl mb-6">Interactive Transit Map</h2>
            <RailMap selectedId={selected.id} onSelect={setSelected} />
          </div>
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
            <h2 className="font-serif text-2xl mb-4">Line Details</h2>
            <p className="font-semibold flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: selected.color }}
              />
              {selected.name}
            </p>
            <ul className="mt-4 space-y-1 text-neutral-300">
              {selected.towns.map((town) => {
                const slug = townSlugMap.get(town.toLowerCase());
                return (
                  <li key={town}>
                    {slug ? (
                      <Link href={`/communities/${slug}`} className="hover:underline">
                        {town}
                      </Link>
                    ) : (
                      town
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
