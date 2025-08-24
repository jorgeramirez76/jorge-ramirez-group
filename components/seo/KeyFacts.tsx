export default function KeyFacts({ items }: { items: string[] }) {
  return (
    <section aria-labelledby="key-facts">
      <h2 id="key-facts">Key Facts</h2>
      <ul className="list-disc pl-5">
        {items.map((i, idx) => (
          <li key={idx} className="my-1">
            {i}
          </li>
        ))}
      </ul>
    </section>
  );
}
