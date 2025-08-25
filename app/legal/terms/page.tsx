import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of Use | The Jorge Ramirez Group",
};
export default function Page() {
  return (
    <div className="container py-16">
      <h1 className="font-serif text-4xl">Terms of Use</h1>
      <div className="prose max-w-none mt-6">
        <p>Please read these terms carefully.</p>
      </div>
    </div>
  );
}
