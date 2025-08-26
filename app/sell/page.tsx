import KeyFacts from '@/components/seo/KeyFacts';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sell Your New Jersey Home',
  description: 'Strategic pricing, concierge prep, and cinematic marketing for NJ sellers.'
};

export const revalidate = 86400;

const sections = [
  {
    title: 'Pricing Strategy',
    body: (
      <p>
        We benchmark active, pending, and sold comps within micro-markets to set an aggressive yet defensible
        list price.
      </p>
    )
  },
  {
    title: 'Concierge & Staging',
    body: (
      <p>
        Light repairs, paint, landscaping, and staging that consistently increase perceived value and reduce days on
        market.
      </p>
    )
  },
  {
    title: 'Cinematic Marketing',
    body: (
      <ul className="list-disc pl-5">
        <li>Pro photography + drone</li>
        <li>HDR video tours & 3D walkthroughs</li>
        <li>Targeted social + Google ads</li>
        <li>High-net-worth buyer outreach</li>
      </ul>
    )
  },
  {
    title: 'Negotiation & Contract-to-Close',
    body: (
      <p>
        Offer strategy to avoid retrades, manage inspection risk, and protect your net.
      </p>
    )
  },
  {
    title: 'Proof',
    body: (
      <ul className="list-disc pl-5">
        <li>
          Average Days on Market (12 mo): <strong>18</strong>
        </li>
        <li>
          List-to-Sale Ratio: <strong>101.7%</strong>
        </li>
        <li>
          Highest Buyer Pools: <strong>$900k–$1.2M</strong> (Summit/Chatham), <strong>$1.8M–$2.4M</strong> (Short Hills)
        </li>
      </ul>
    )
  },
  {
    title: 'FAQs',
    body: (
      <>
        <details>
          <summary>How do we price?</summary>
          <p>We price to the market’s appetite, not the average. Strategy memo provided before list.</p>
        </details>
        <details>
          <summary>Is staging required?</summary>
          <p>Not always. We tailor scope to ROI by room.</p>
        </details>
      </>
    )
  }
];

const facts = [
  'Full-service listing: pricing, prep, marketing, and negotiation',
  'Average DOM target: ≤ 21 days; list-to-sale ratio ≥ 100%',
  'Professional media package on every listing',
  'Transparent weekly updates; offer & inspection playbooks'
];

export default function SellPage() {
  const delay = 200;
  return (
    <div className="bg-black text-white min-h-screen [&_p]:text-white [&_li]:text-white">
      <main className="mx-auto max-w-[900px] p-8">
        <h1
          className="opacity-0 [animation:fade-up_0.5s_ease_forwards]"
          style={{ animationDelay: `${0}ms` }}
        >
          Sell for More, with Less Friction
        </h1>

        {sections.map((s, idx) => (
          <section
            key={s.title}
            className="opacity-0 [animation:fade-up_0.5s_ease_forwards]"
            style={{ animationDelay: `${(idx + 1) * delay}ms` }}
          >
            <h2>{s.title}</h2>
            {s.body}
          </section>
        ))}

        <KeyFacts items={facts} startIndex={sections.length + 1} />

        <p
          className="opacity-0 [animation:fade-up_0.5s_ease_forwards]"
          style={{ animationDelay: `${(sections.length + facts.length + 1) * delay}ms` }}
        >
          <a
            className="inline-block rounded-md bg-[#cc0000] px-4 py-3 text-white"
            href="/contact?subject=Seller%20Consultation"
          >
            Request a Seller Consultation
          </a>
        </p>
      </main>
    </div>
  );
}

