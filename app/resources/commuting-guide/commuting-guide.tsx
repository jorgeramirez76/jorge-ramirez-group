'use client';
import { useState } from 'react';
import { RailMap } from '@/components/rail-map';
import { trainLines, TrainLine } from '@/lib/train-lines';

export default function CommutingGuide() {
  const [selected, setSelected] = useState<TrainLine>(trainLines[0]);

  return (
    <div className="container py-16">
      <h1 className="font-serif text-4xl">Commuting Guide</h1>
      <div className="mt-8 flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <RailMap selectedId={selected.id} onSelect={setSelected} />
        </div>
        <div className="lg:w-1/3 border rounded-2xl p-6 bg-white">
          <h2 className="font-serif text-2xl mb-4">Line Details</h2>
          <p className="font-semibold flex items-center gap-2">
            <span
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: selected.color }}
            />
            {selected.name}
          </p>
          <ul className="mt-4 list-disc pl-5 space-y-1">
            {selected.towns.map((town) => (
              <li key={town}>{town}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
