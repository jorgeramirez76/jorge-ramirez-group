import Image from 'next/image';
import { getIDX } from '@/lib/idx/provider';
import { formatNumber, formatPrice } from '@/lib/utils/format';

export const revalidate = 300; // 5 minutes

export default async function ListingsPage() {
  const listings = await getIDX().featured(12).catch(() => []);
  return (
    <main className="max-w-[1120px] mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Featured Listings</h1>
      {!listings?.length ? (
        <p>
          No featured listings yet.{' '}
          <a href="/contact?subject=Off-Market">Ask about off-market homes</a>.
        </p>
      ) : (
        <ul className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-5">
          {listings.map((l) => (
            <li key={l.id} className="border rounded-lg overflow-hidden bg-white">
              <a href={l.url ?? `/contact?interest=${encodeURIComponent(l.address)}`}>
                <Image src={l.image} alt={`${l.address}, ${l.city}`} width={800} height={533} />
                <div className="p-3">
                  <h2>
                    {l.address}, {l.city}, {l.state} {l.zip}
                  </h2>
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
  );
}
