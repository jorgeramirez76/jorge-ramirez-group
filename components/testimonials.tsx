import testimonials from "@/content/testimonials.json";
import type { Testimonial } from '@/types/testimonial';
export function Testimonials() {
  const items = testimonials as Testimonial[];
  if (!items?.length) return <p className="text-neutral-400">Testimonials coming soon.</p>;
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {items.map((t, i) => (
        <div key={i} className="rounded-2xl border border-white/10 p-6 bg-neutral-900">
          <p className="italic">“{t.quote}”</p>
          <div className="mt-4 font-medium">{t.author}</div>
        </div>
      ))}
    </div>
  );
}