import Image from "next/image";
export function RailMap() {
  return (
    <div className="rounded-2xl overflow-hidden border">
      <Image
        src="https://placehold.co/1600x1000?text=Rail+Map"
        alt="NYC ↔ Union/Morris/Essex commuter lines"
        width={1600}
        height={1000}
        className="w-full h-auto"
      />
      <p className="sr-only">
        Schematic map showing NJ Transit commuter paths between NYC and Union,
        Morris, and Essex counties.
      </p>
    </div>
  );
}
