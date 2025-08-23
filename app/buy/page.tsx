import KeyFacts from '@/components/seo/KeyFacts';

export const revalidate = 86400;

export default function BuyPage() {
  return (
    <main className="mx-auto max-w-[900px] px-5 py-8">
      <h1>Buy Confidently in Union • Morris • Essex • Hudson • Middlesex</h1>

      <section>
        <h2>Pre-Approval & Budget</h2>
        <p>We connect you with top lenders for fast, underwritten approvals that strengthen your offer.</p>
      </section>

      <section>
        <h2>Tour Strategy</h2>
        <p>Private tours with candid feedback on price, condition, and resale risk.</p>
      </section>

      <section>
        <h2>Offer Playbook</h2>
        <p>We use escalation clauses <em>only</em> when comps support the ceiling. Appraisal gaps are paired with pre-underwritten approvals and a defendable LTV. Inspection credits beat price drops in low-inventory segments.</p>
      </section>

      <section>
        <h2>Inspection & Appraisal</h2>
        <p>We anticipate hot buttons, pre-wire solutions, and keep your deal on track.</p>
      </section>

      <KeyFacts
        items={[
          'Local market intel across 5 counties',
          'Commuter-rail guidance to NYC with time/cost tradeoffs',
          'Access to private & coming-soon inventory',
          'Offer strategies tailored to each micro-market'
        ]}
      />

      <p>
        <a
          className="inline-block rounded-md bg-[var(--brand-red)] px-4 py-3 text-white"
          href="/contact?subject=Buyer%20Consultation"
        >
          Start Your Purchase Plan
        </a>
      </p>
    </main>
  );
}
