import Image from "next/image";
import { notFound } from "next/navigation";
import listings from "@/content/listings.json";
import type { Metadata } from "next";

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const listing = (listings as any[]).find(l => l.slug === params.slug);
  if (!listing) return { title: "Listing" };
  return {
    title: `${listing.address} | ${listing.price}`,
    description: listing.description?.slice(0, 140) ?? "Property listing"
  };
}

export default function ListingDetail({ params }: Props) {
  const listing = (listings as any[]).find(l => l.slug === params.slug);
  if (!listing) return notFound();
  return (
    <div className="container py-12">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
          <Image src={listing.images?.[0] ?? "/images/placeholder.webp"} alt={listing.address} fill className="object-cover" />
        </div>
        <div>
          <h1 className="font-serif text-4xl">{listing.address}</h1>
          <p className="mt-2 text-xl">${"{"}listing.price.toLocaleString(){"}"}</p>
          <p className="mt-4">{listing.beds} Beds • {listing.baths} Baths • {listing.sqft.toLocaleString()} SqFt</p>
          <p className="mt-6 text-neutral-700">{listing.description}</p>
          <form action="/api/lead" method="post" className="mt-8 space-y-3">
            <input type="hidden" name="interest" value={listing.address} />
            <input name="name" required placeholder="Full name" className="w-full border rounded-2xl p-3" />
            <input name="email" required type="email" placeholder="Email" className="w-full border rounded-2xl p-3" />
            <button className="bg-black text-white px-5 py-3 rounded-2xl">Request a Private Tour</button>
          </form>
        </div>
      </div>
    </div>
  );
}