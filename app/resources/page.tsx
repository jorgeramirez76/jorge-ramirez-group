import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources",
  description: "Resources | The Jorge Ramirez Group",
};

export default function ResourcesPage() {
  return (
    <div className="bg-black text-white min-h-screen [&_p]:text-white">
      <main className="mx-auto max-w-[900px] p-8">
        <h1
          className="font-serif text-4xl opacity-0 [animation:fade-up_0.5s_ease_forwards]"
          style={{ animationDelay: "0ms" }}
        >
          Resources
        </h1>
        <p
          className="mt-6 opacity-0 [animation:fade-up_0.5s_ease_forwards]"
          style={{ animationDelay: "200ms" }}
        >
          Guides, blog posts, FAQs, and a practical glossary for NJ buyers and sellers.
        </p>
      </main>
    </div>
  );
}

