import Image from 'next/image';
import { getIDX } from '@/lib/idx/provider';
import { formatNumber, formatPrice } from '@/lib/utils/format';

export const revalidate = 300; // 5 minutes

export default async function ListingsPage() {
  const listings = await getIDX().featured(12).catch(() => []);
  return (
    <main className="wrap">
      <h1>Featured Listings</h1>
      {!listings?.length ? (
        <p>
          No featured listings yet. <a href="/contact?subject=Off-Market">Ask about off-market homes</a>.
        </p>
      ) : (
        <ul className="grid">
          {listings.map((l) => (
            <li key={l.id} className="card">
              <a href={l.url ?? `/contact?interest=${encodeURIComponent(l.address)}`}>
                <Image src={l.image} alt={`${l.address}, ${l.city}`} width={800} height={533} />
                <div className="meta">
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
      <style jsx>{`
        .wrap {
          max-width: 1120px;
          margin: 0 auto;
          padding: 32px 20px;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 20px;
        }
        .card {
          border: 1px solid #eee;
          border-radius: 8px;
          overflow: hidden;
          background: #fff;
        }
        .meta {
          padding: 12px 14px;
        }
      `}</style>
    </main>
  );
}
