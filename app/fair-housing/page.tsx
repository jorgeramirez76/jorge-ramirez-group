export const revalidate = 604800;

export default function FairHousing() {
  return (
    <main className="container">
      <h1>Fair Housing & Equal Opportunity</h1>
      <p>
        We strictly comply with federal, state, and local fair housing laws. We do not discriminate based on race, color,
        religion, sex, disability, familial status, national origin, or other protected classes.
      </p>
      <style jsx>{`.container{max-width:900px;margin:0 auto;padding:32px 20px}`}</style>
    </main>
  );
}
