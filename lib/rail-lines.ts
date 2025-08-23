export interface RailLine {
  id: string;
  name: string;
  color: string;
  path: string;
  stops: string[];
}

export const railLines: RailLine[] = [
  {
    id: "northeast-corridor",
    name: "Northeast Corridor",
    color: "#E50000",
    path: "M150 800 C 400 600, 800 600, 1200 400",
    stops: [
      "New York Penn Station",
      "Newark Penn Station",
      "Elizabeth",
      "Linden",
      "Rahway"
    ]
  },
  {
    id: "north-jersey-coast",
    name: "North Jersey Coast Line",
    color: "#1E90FF",
    path: "M150 700 C 450 500, 900 500, 1350 350",
    stops: [
      "New York Penn Station",
      "Newark Penn Station",
      "South Amboy",
      "Long Branch",
      "Bay Head"
    ]
  },
  {
    id: "raritan-valley",
    name: "Raritan Valley Line",
    color: "#2E8B57",
    path: "M150 600 C 500 450, 950 450, 1450 300",
    stops: [
      "New York Penn Station",
      "Newark Penn Station",
      "Westfield",
      "Somerville",
      "Raritan"
    ]
  }
];

export function getRailLine(id: string): RailLine | undefined {
  return railLines.find((line) => line.id === id);
}
