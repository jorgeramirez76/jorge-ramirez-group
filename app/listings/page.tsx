import Image from 'next/image';
import { getIDX } from '@/lib/idx/provider';
import { formatNumber, formatPrice } from '@/lib/utils/format';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Featured Listings',
  description: 'Browse featured New Jersey homes for sale from The Jorge Ramirez Group.'
};

export const revalidate = 300; // 5 minutes

export default async function ListingsPage() {
  const listings = await getIDX().featured(12).catch(() => []);
  const delay = 200;
  return (
    <div className="bg-black text-white min-h-screen [&_p]:text-white [&_li]:text-white">
      <main className="mx-auto max-w-[1120px] p-8">
        <h1
          className="opacity-0 [animation:fade-up_0.5s_ease_forwards]"
          style={{ animationDelay: `${0}ms` }}
        >
          Featured Listings
        </h1>
        {!listings?.length ? (
          <p
            className="mt-4 opacity-0 [animation:fade-up_0.5s_ease_forwards]"
            style={{ animationDelay: `${delay}ms` }}
          >
            No featured listings yet.{' '}
            <a href="/contact?subject=Off-Market">Ask about off-market homes</a>.
          </p>
        ) : (
          <ul className="mt-6 grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-5">
            {listings.map((l, idx) => (
              <li
                key={l.id}
                className="overflow-hidden rounded-lg border border-neutral-700 bg-neutral-900 opacity-0 [animation:fade-up_0.5s_ease_forwards]"
                style={{ animationDelay: `${(idx + 1) * delay}ms` }}
              >
                <a href={l.url ?? `/contact?interest=${encodeURIComponent(l.address)}`}>
                  <Image
                    src={l.image}
                    alt={`${l.address}, ${l.city}`}
                    width={800}
                    height={533}
                    className="object-cover"
                  />
                  <div className="p-3.5">
                    <h2>{l.address}, {l.city}, {l.state} {l.zip}</h2>
                    <p>
                      {formatPrice(l.price)} • {l.beds} bd • {l.baths} ba
                      {l.sqft ? ` • ${formatNumber(l.sqft)} sf` : ''}
                    </p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}
