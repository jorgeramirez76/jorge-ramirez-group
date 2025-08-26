import { COUNTIES } from '@/content/communities.data';
import Image from 'next/image';
import Link from 'next/link';

export const revalidate = 3600;

const COUNTY_IMAGES: Record<string, { src: string; alt: string }> = {
  'union-county': {
    src: 'https://images.unsplash.com/photo-1443890484047-5eaa67d1d630?auto=format&fit=crop&w=600&h=400&q=80',
    alt: 'Aerial view of river cutting through a city at dusk'
  },
  'morris-county': {
    src: 'https://images.unsplash.com/photo-1452274381522-521513015433?auto=format&fit=crop&w=600&h=400&q=80',
    alt: 'Suburban home with driveway and lawn'
  },
  'essex-county': {
    src: 'https://images.unsplash.com/photo-1712746438791-ccf70478e0d0?auto=format&fit=crop&w=600&h=400&q=80',
    alt: 'Modern houses with balconies and glass'
  },
  'hudson-county': {
    src: 'https://images.unsplash.com/photo-1433878455169-4698e60005b1?auto=format&fit=crop&w=600&h=400&q=80',
    alt: 'Waterfront homes reflecting on calm water'
  },
  'middlesex-county': {
    src: 'https://images.unsplash.com/photo-1454982523318-4b6396f39d3a?auto=format&fit=crop&w=600&h=400&q=80',
    alt: 'Large stone house with front yard and driveway'
  }
};

export default function Communities() {
  return (
    <div className="bg-black text-white min-h-screen">
      <main className="mx-auto max-w-[1120px] p-8">
        <h1>Communities</h1>
        <ul className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4">
          {COUNTIES.map((c) => (
            <li key={c.slug}>
              <Link
                className="group relative block h-40 overflow-hidden rounded-md"
                href={`/communities/${c.slug}`}
              >
                <Image
                  src={COUNTY_IMAGES[c.slug].src}
                  alt={COUNTY_IMAGES[c.slug].alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(min-width: 768px) 240px, 100vw"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-black/40 text-white">
                  {c.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

