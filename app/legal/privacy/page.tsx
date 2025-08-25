import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy | The Jorge Ramirez Group",
};
export default function Page() {
  return (
    <div className="container py-16">
      <h1 className="font-serif text-4xl">Privacy Policy</h1>
      <div className="prose max-w-none mt-6">
        <p>Your privacy matters to us.</p>
      </div>
    </div>
  );
}
