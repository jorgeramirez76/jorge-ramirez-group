"use client";
import { useRouter } from "next/navigation";
import { railLines } from "@/lib/rail-lines";

export function RailMap() {
  const router = useRouter();
  return (
    <div className="rounded-2xl overflow-hidden border">
      <svg viewBox="0 0 1600 1000" className="w-full h-auto">
        {railLines.map((line) => (
          <path
            key={line.id}
            d={line.path}
            stroke={line.color}
            strokeWidth={8}
            fill="none"
            className="cursor-pointer transition-transform hover:scale-110"
            style={{ transformOrigin: "center" }}
            onClick={() => router.push(`/commuting/${line.id}`)}
          />
        ))}
      </svg>
      <p className="sr-only">
        Schematic map showing NJ Transit commuter paths between NYC and nearby counties.
      </p>
    </div>
  );
}
