import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resources",
  description: "Resources | The Jorge Ramirez Group"
};
export default function Page() {
  return (
    <div className="container py-16">
      <h1 className="font-serif text-4xl">Resources</h1>
      <div className="prose max-w-none mt-6">
        <p>Guides, blog posts, FAQs, and a practical glossary for NJ buyers and sellers.</p>
      </div>
      
    </div>
  );
}