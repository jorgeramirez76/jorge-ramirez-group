import { COUNTIES } from '@/content/communities.data';
import Image from 'next/image';

export const revalidate = 3600;

const COUNTY_IMAGES: Record<string, { src: string; alt: string }> = {
  'union-county': {
    src: 'https://picsum.photos/id/1015/600/400',
    alt: 'City skyline with harbour and residential foreground'
  },
  'morris-county': {
    src: 'https://picsum.photos/id/1020/600/400',
    alt: 'Suburban home with driveway and lawn'
  },
  'essex-county': {
    src: 'https://picsum.photos/id/1024/600/400',
    alt: 'Modern houses with balconies and glass'
  },
  'hudson-county': {
    src: 'https://picsum.photos/id/1035/600/400',
    alt: 'Waterfront homes reflecting on calm water'
  },
  'middlesex-county': {
    src: 'https://picsum.photos/id/1043/600/400',
    alt: 'Large stone house with front yard and driveway'
  }
};

export default function Communities() {
  return (
    <main className="mx-auto max-w-[1120px] p-8">
      <h1>Communities</h1>
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4">
        {COUNTIES.map((c) => (
          <li key={c.slug}>
            <a
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
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
