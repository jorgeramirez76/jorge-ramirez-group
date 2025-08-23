import { RailMap } from "@/components/rail-map";

export const metadata = { title: "Commuting" };

export default function CommutingPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8">Commuting</h1>
      <RailMap />
    </div>
  );
}
