export default function KeyFacts({ items }: { items: string[] }) {
  return (
    <section aria-labelledby="key-facts">
      <h2 id="key-facts">Key Facts</h2>
      <ul>
        {items.map((i, idx) => (
          <li key={idx}>{i}</li>
        ))}
      </ul>
      <style jsx>{`
        ul { padding-left: 20px; }
        li { margin: 6px 0; }
      `}</style>
    </section>
  );
}
