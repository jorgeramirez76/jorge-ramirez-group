import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Accessibility (ADA)",
  description: "Accessibility (ADA) | The Jorge Ramirez Group"
};
export default function Page() {
  return (
    <div className="container py-16">
      <h1 className="font-serif text-4xl">Accessibility (ADA)</h1>
      <div className="prose max-w-none mt-6">
        <p>We strive to make our site accessible to all.</p>
      </div>
      
    </div>
  );
}