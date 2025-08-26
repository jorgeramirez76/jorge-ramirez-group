import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About The Jorge Ramirez Group",
  description: "About The Jorge Ramirez Group | The Jorge Ramirez Group",
};

export default function AboutPage() {
  return (
    <div className="bg-black text-white min-h-screen [&_p]:text-white">
      <main className="mx-auto max-w-[900px] p-8">
        <h1
          className="font-serif text-4xl opacity-0 [animation:fade-up_0.5s_ease_forwards]"
          style={{ animationDelay: "0ms" }}
        >
          About The Jorge Ramirez Group
        </h1>
        <p
          className="mt-6 opacity-0 [animation:fade-up_0.5s_ease_forwards]"
          style={{ animationDelay: "200ms" }}
        >
          Award‑winning service, market intelligence, and a relentless focus on client outcomes.
        </p>
      </main>
    </div>
  );
}

