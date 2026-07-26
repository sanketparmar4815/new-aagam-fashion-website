import { PageHero } from "@/components/layout/PageHero";
import { PageShell } from "@/components/layout/PageShell";
import { FabricSection } from "@/components/sections/FabricSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fabric Library",
  description: "Discover our handpicked collection of premium Giza cottons, linens, 2-ply shirting, and luxury textiles.",
};

export default function FabricPage() {
  return (
    <PageShell>
      <PageHero
        label="Materials"
        title="Bespoke Fabrics"
        description="A selection of premium materials curated from world-class weavers to shape your custom wardrobe."
        imageSrc="https://images.unsplash.com/photo-1544816155-12df9643f363?w=1920&q=85"
        imageAlt="Bespoke tailoring fabrics and swatches"
      />
      <FabricSection />
    </PageShell>
  );
}
