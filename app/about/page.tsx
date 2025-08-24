import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About The Jorge Ramirez Group",
  description: "About The Jorge Ramirez Group | The Jorge Ramirez Group"
};
export default function Page() {
  return (
    <div className="container py-16">
      <h1 className="font-serif text-4xl">About The Jorge Ramirez Group</h1>
      <div className="prose max-w-none mt-6">
        <p>Award‑winning service, market intelligence, and a relentless focus on client outcomes.</p>
      </div>
      
    </div>
  );
}