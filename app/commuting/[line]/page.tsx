import { notFound } from "next/navigation";
import { railLines, getRailLine } from "@/lib/rail-lines";

export function generateStaticParams() {
  return railLines.map((line) => ({ line: line.id }));
}

export default function RailLinePage({ params }: { params: { line: string } }) {
  const line = getRailLine(params.line);
  if (!line) return notFound();
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8">{line.name} Stops</h1>
      <ul className="list-disc pl-6 space-y-1">
        {line.stops.map((stop) => (
          <li key={stop}>{stop}</li>
        ))}
      </ul>
    </div>
  );
}
