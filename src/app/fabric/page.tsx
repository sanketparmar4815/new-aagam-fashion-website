import { PageHero } from "@/components/layout/PageHero";
import { PageShell } from "@/components/layout/PageShell";
import { FabricMasterySection } from "@/components/sections/FabricMasterySection";
import { OurExpertiseSection } from "@/components/sections/OurExpertiseSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fabric",
  description:
    "Premium fabrics sourced from master weavers — silks, cottons, and bespoke textiles by the meter.",
};

export default function FabricPage() {
  return (
    <PageShell>
      <PageHero
        label="By the meter"
        title="Premium fabrics"
        description="From heritage silks to contemporary blends — materials chosen for drape, durability, and character."
        imageSrc="https://images.unsplash.com/photo-1558171813-1c0887535cc1?w=1920&q=85"
        imageAlt="Fine fabric rolls and textile samples"
      />
      <FabricMasterySection />
      <OurExpertiseSection />
    </PageShell>
  );
}
