import Image from "next/image";
import Link from "next/link";
import listings from "@/content/listings.json";
import type { ListingItem } from "@/types/listing";

export function ListingGrid({ limit }: { limit?: number }) {
  const items = (listings as ListingItem[]).slice(0, limit ?? undefined);
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((l) => (
        <Link
          key={l.slug}
          href={`/listings/${l.slug}`}
          className="group block rounded-2xl overflow-hidden border hover:shadow-soft transition"
        >
          <div className="relative aspect-[4/3]">
            <Image
              src={
                l.images?.[0] ?? "https://placehold.co/600x400?text=No+Image"
              }
              alt={l.address}
              fill
              className="object-cover group-hover:scale-105 transition"
            />
          </div>
          <div className="p-4">
            <div className="text-sm text-neutral-600">{l.town}</div>
            <div className="font-medium mt-1">
              ${"{"}l.price.toLocaleString(){"}"}
            </div>
            <div className="text-sm mt-1">
              {l.beds} Beds • {l.baths} Baths • {l.sqft.toLocaleString()} SqFt
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
