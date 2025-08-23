export default function KeyFacts({ items }: { items: string[] }) {
  return (
    <section aria-labelledby="key-facts">
      <h2 id="key-facts" className="text-xl font-semibold">Key Facts</h2>
      <ul className="pl-5">
        {items.map((i, idx) => (
          <li key={idx} className="my-1.5">
            {i}
          </li>
        ))}
      </ul>
    </section>
  );
}
