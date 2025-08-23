import testimonials from "@/content/testimonials.json";
export function Testimonials() {
  const items = testimonials as any[];
  if (!items?.length) return <p className="text-neutral-600">Testimonials coming soon.</p>;
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {items.map((t, i) => (
        <div key={i} className="rounded-2xl border p-6 bg-white">
          <p className="italic">“{t.quote}”</p>
          <div className="mt-4 font-medium">{t.author}</div>
        </div>
      ))}
    </div>
  );
}