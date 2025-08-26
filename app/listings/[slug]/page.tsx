import Image from "next/image";
import { notFound } from "next/navigation";
import listings from "@/content/listings.json";
import type { ListingItem } from '@/types/listing';
import type { Metadata } from "next";

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const listing = (listings as ListingItem[]).find(l => l.slug === params.slug);
  if (!listing) return { title: "Listing" };
  return {
    title: `${listing.address} | ${listing.price}`,
    description: listing.description?.slice(0, 140) ?? "Property listing"
  };
}

export default function ListingDetail({ params }: Props) {
  const listing = (listings as ListingItem[]).find((l) => l.slug === params.slug);
  if (!listing) return notFound();
  return (
    <div className="bg-black text-white min-h-screen [&_p]:text-white">
      <main className="container py-12">
        <div className="grid gap-8 lg:grid-cols-2">
          <div
            className="relative aspect-[4/3] overflow-hidden rounded-2xl opacity-0 [animation:fade-up_0.5s_ease_forwards]"
            style={{ animationDelay: "0ms" }}
          >
            <Image
              src={listing.images?.[0] ?? "/images/placeholder.webp"}
              alt={listing.address}
              fill
              className="object-cover"
            />
          </div>
          <div
            className="opacity-0 [animation:fade-up_0.5s_ease_forwards]"
            style={{ animationDelay: "200ms" }}
          >
            <h1 className="font-serif text-4xl">{listing.address}</h1>
            <p className="mt-2 text-xl">
              ${"{"}listing.price.toLocaleString(){"}"}
            </p>
            <p className="mt-4">
              {listing.beds} Beds • {listing.baths} Baths • {listing.sqft.toLocaleString()} SqFt
            </p>
            <p className="mt-6">{listing.description}</p>
            <form action="/api/lead" method="post" className="mt-8 space-y-3">
              <input type="hidden" name="interest" value={listing.address} />
              <input
                name="name"
                required
                placeholder="Full name"
                className="w-full rounded-2xl border border-neutral-700 bg-neutral-900 p-3 text-white"
              />
              <input
                name="email"
                required
                type="email"
                placeholder="Email"
                className="w-full rounded-2xl border border-neutral-700 bg-neutral-900 p-3 text-white"
              />
              <button className="rounded-2xl bg-[#cc0000] px-5 py-3 text-white">
                Request a Private Tour
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}