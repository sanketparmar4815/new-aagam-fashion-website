export interface ExpertiseCard {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: "shirt" | "layers" | "scissors";
}

export const expertiseCards: ExpertiseCard[] = [
  {
    id: "ex-1",
    title: "Clothing",
    description:
      "Ready-to-wear and made-to-order silhouettes for work, celebrations, and every day in between.",
    href: "#new-arrivals",
    icon: "shirt",
  },
  {
    id: "ex-2",
    title: "Fabrics",
    description:
      "Curated mills and hand-selected rolls — silks, wools, and occasion weaves sold by the meter.",
    href: "#fabric-mastery",
    icon: "layers",
  },
  {
    id: "ex-3",
    title: "Custom Tailoring",
    description:
      "Measurements, muslins, and master tailors dedicated to a fit that feels like your signature.",
    href: "#tailoring-process",
    icon: "scissors",
  },
];
