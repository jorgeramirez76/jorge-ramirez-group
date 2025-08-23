export default function KeyFacts({ items }: { items: string[] }) {
  return (
    <section aria-labelledby="key-facts">
      <h2 id="key-facts">Key Facts</h2>
      <ul className="pl-5 list-disc">
        {items.map((i, idx) => (
          <li key={idx} className="my-1.5">
            {i}
          </li>
        ))}
      </ul>
    </section>
  );
}
