export default function KeyFacts({ items, startIndex = 0 }: { items: string[]; startIndex?: number }) {
  const delay = 200;
  return (
    <section aria-labelledby="key-facts">
      <h2 id="key-facts">Key Facts</h2>
      <ul className="list-disc pl-5">
        {items.map((i, idx) => (
          <li
            key={idx}
            className="my-1 opacity-0 [animation:fade-up_0.5s_ease_forwards]"
            style={{ animationDelay: `${(startIndex + idx) * delay}ms` }}
          >
            {i}
          </li>
        ))}
      </ul>
    </section>
  );
}
