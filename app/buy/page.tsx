import KeyFacts from '@/components/seo/KeyFacts';

export const revalidate = 86400;

export default function BuyPage() {
  return (
    <main className="container">
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
        <a className="cta" href="/contact?subject=Buyer%20Consultation">
          Start Your Purchase Plan
        </a>
      </p>

      <style jsx>{`
        .container { max-width: 900px; margin: 0 auto; padding: 32px 20px; }
        .cta { display: inline-block; padding: 12px 16px; background: #cc0000; color: #fff; border-radius: 6px; }
      `}</style>
    </main>
  );
}
