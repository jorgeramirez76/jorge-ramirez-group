'use client';
import { trainLines, TrainLine } from '@/lib/train-lines';

interface RailMapProps {
  onSelect: (line: TrainLine) => void;
  selectedId: string;
}

export function RailMap({ onSelect, selectedId }: RailMapProps) {
  return (
    <div className="rounded-2xl overflow-hidden border">
      <svg
        viewBox="0 0 1600 1000"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        <rect width="1600" height="1000" fill="#ffffff" />
        {trainLines.map((line) => (
          <path
            key={line.id}
            d={line.path}
            stroke={line.color}
            strokeWidth={selectedId === line.id ? 8 : 6}
            fill="none"
            className="cursor-pointer transition-opacity"
            onClick={() => onSelect(line)}
          />
        ))}
      </svg>
      <p className="sr-only">
        Schematic map showing NJ Transit commuter paths between NYC and Union, Morris, and Essex counties.
      </p>
    </div>
  );
}
