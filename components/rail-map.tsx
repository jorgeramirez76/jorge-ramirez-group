'use client';

import { trainLines, TrainLine } from '@/lib/train-lines';
import clsx from 'clsx';

interface RailMapProps {
  onSelect: (line: TrainLine) => void;
  selectedId: string;
}

export function RailMap({ onSelect, selectedId }: RailMapProps) {
  return (
    <div className="space-y-4">
      {trainLines.map((line) => (
        <button
          key={line.id}
          onClick={() => onSelect(line)}
          className="flex items-center gap-4 w-full group"
        >
          <span
            className="flex-1 h-1 rounded transition-opacity group-hover:opacity-100"
            style={{
              backgroundColor: line.color,
              height: 6,
              opacity: selectedId === line.id ? 1 : 0.4,
            }}
          />
          <span
            className={clsx(
              'text-sm truncate',
              selectedId === line.id ? 'text-white font-semibold' : 'text-neutral-400'
            )}
          >
            {line.name}
          </span>
        </button>
      ))}
      <p className="sr-only">Select a transit line to view the towns it serves.</p>
    </div>
  );
}
