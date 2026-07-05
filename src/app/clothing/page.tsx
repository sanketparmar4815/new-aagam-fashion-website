import { PageHero } from "@/components/layout/PageHero";
import { PageShell } from "@/components/layout/PageShell";
import { BestSellersSection } from "@/components/sections/BestSellersSection";
import { NewArrivalsSection } from "@/components/sections/NewArrivalsSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clothing",
  description:
    "Explore ready-to-wear designer clothing, best sellers, and new arrivals from Aagam Fashion.",
};

export default function ClothingPage() {
  return (
    <PageShell>
      <PageHero
        label="Ready to wear"
        title="Designer clothing"
        description="Curated ready-to-wear pieces crafted with the same precision as our bespoke atelier."
        imageSrc="https://images.unsplash.com/photo-1483985988354-763728e1935b?w=1920&q=85"
        imageAlt="Designer clothing collection display"
      />
      <BestSellersSection />
      <NewArrivalsSection />
    </PageShell>
  );
}
