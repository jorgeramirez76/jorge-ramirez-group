import KeyFacts from '@/components/seo/KeyFacts';

export const revalidate = 86400;

const steps = [
  {
    title: 'Pre-Approval & Budget',
    body: (
      <>We connect you with top lenders for fast, underwritten approvals that strengthen your offer.</>
    )
  },
  {
    title: 'Tour Strategy',
    body: <>Private tours with candid feedback on price, condition, and resale risk.</>
  },
  {
    title: 'Offer Playbook',
    body: (
      <>We use escalation clauses <em>only</em> when comps support the ceiling. Appraisal gaps are paired with pre-underwritten approvals and a defendable LTV. Inspection credits beat price drops in low-inventory segments.</>
    )
  },
  {
    title: 'Inspection & Appraisal',
    body: <>We anticipate hot buttons, pre-wire solutions, and keep your deal on track.</>
  }
];

const facts = [
  'Local market intel across 5 counties',
  'Commuter-rail guidance to NYC with time/cost tradeoffs',
  'Access to private & coming-soon inventory',
  'Offer strategies tailored to each micro-market'
];

export default function BuyPage() {
  const delay = 200;
  return (
    <div className="bg-black text-white min-h-screen">
      <main className="mx-auto max-w-[900px] p-8">
        <h1
          className="opacity-0 [animation:fade-up_0.5s_ease_forwards]"
          style={{ animationDelay: `${0}ms` }}
        >
          Buy Confidently in Union • Morris • Essex • Hudson • Middlesex
      </h1>

      {steps.map((s, idx) => (
        <section
          key={s.title}
          className="opacity-0 [animation:fade-up_0.5s_ease_forwards]"
          style={{ animationDelay: `${(idx + 1) * delay}ms` }}
        >
          <h2>{s.title}</h2>
          <p>{s.body}</p>
        </section>
      ))}

      <KeyFacts items={facts} startIndex={steps.length + 1} />

      <p
        className="opacity-0 [animation:fade-up_0.5s_ease_forwards]"
        style={{
          animationDelay: `${(steps.length + facts.length + 1) * delay}ms`
        }}
      >
        <a
          className="inline-block rounded-md bg-[#cc0000] px-4 py-3 text-white"
          href="/contact?subject=Buyer%20Consultation"
        >
          Start Your Purchase Plan
        </a>
      </p>
      </main>
    </div>
  );
}
