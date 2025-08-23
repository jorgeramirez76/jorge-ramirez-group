type Props = { title: string; eyebrow?: string; children: React.ReactNode };
export function Section({ title, eyebrow, children }: Props) {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mb-8">
          {eyebrow && <div className="text-brand-red tracking-widest uppercase text-sm">{eyebrow}</div>}
          <h2 className="font-serif text-3xl md:text-4xl">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}