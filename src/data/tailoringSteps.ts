export interface TailoringStep {
  id: string;
  title: string;
  description: string;
}

export const tailoringSteps: TailoringStep[] = [
  {
    id: "tp-1",
    title: "Consultation",
    description: "Initial discovery and requirement discussion.",
  },
  {
    id: "tp-2",
    title: "Design",
    description: "Style direction and fabric decisions.",
  },
  {
    id: "tp-3",
    title: "Creation",
    description: "Pattern-making and garment construction.",
  },
  {
    id: "tp-4",
    title: "Delivery",
    description: "Final checks and handover.",
  },
];
