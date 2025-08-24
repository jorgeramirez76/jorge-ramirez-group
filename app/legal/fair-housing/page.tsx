import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fair Housing",
  description: "Fair Housing | The Jorge Ramirez Group"
};
export default function Page() {
  return (
    <div className="container py-16">
      <h1 className="font-serif text-4xl">Fair Housing</h1>
      <div className="prose max-w-none mt-6">
        <p>We support and practice the principles of Fair Housing.</p>
      </div>
      
    </div>
  );
}