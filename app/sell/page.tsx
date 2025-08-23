import KeyFacts from '@/components/seo/KeyFacts';

export const revalidate = 86400;

export default function SellPage() {
  return (
    <main className="container max-w-[900px] py-8 px-5">
      <h1>Sell for More, with Less Friction</h1>

      <section>
        <h2>Pricing Strategy</h2>
        <p>We benchmark active, pending, and sold comps within micro-markets to set an aggressive yet defensible list price.</p>
      </section>

      <section>
        <h2>Concierge &amp; Staging</h2>
        <p>Light repairs, paint, landscaping, and staging that consistently increase perceived value and reduce days on market.</p>
      </section>

      <section>
        <h2>Cinematic Marketing</h2>
        <ul>
          <li>Pro photography + drone</li>
          <li>HDR video tours & 3D walkthroughs</li>
          <li>Targeted social + Google ads</li>
          <li>High-net-worth buyer outreach</li>
        </ul>
      </section>

      <section>
        <h2>Negotiation &amp; Contract-to-Close</h2>
        <p>Offer strategy to avoid retrades, manage inspection risk, and protect your net.</p>
      </section>

      <section>
        <h2>Proof</h2>
        <ul>
          <li>Average Days on Market (12 mo): <strong>18</strong></li>
          <li>List-to-Sale Ratio: <strong>101.7%</strong></li>
          <li>Highest Buyer Pools: <strong>$900k–$1.2M</strong> (Summit/Chatham), <strong>$1.8M–$2.4M</strong> (Short Hills)</li>
        </ul>
      </section>

      <section>
        <h2>FAQs</h2>
        <details><summary>How do we price?</summary><p>We price to the market’s appetite, not the average. Strategy memo provided before list.</p></details>
        <details><summary>Is staging required?</summary><p>Not always. We tailor scope to ROI by room.</p></details>
      </section>

      <KeyFacts
        items={[
          'Full-service listing: pricing, prep, marketing, and negotiation',
          'Average DOM target: ≤ 21 days; list-to-sale ratio ≥ 100%',
          'Professional media package on every listing',
          'Transparent weekly updates; offer & inspection playbooks'
        ]}
      />

      <p>
        <a className="inline-block px-4 py-3 rounded-md bg-[#cc0000] text-white" href="/contact?subject=Seller%20Consultation">
          Request a Seller Consultation
        </a>
      </p>
    </main>
  );
}
