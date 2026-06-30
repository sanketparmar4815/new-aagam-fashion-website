import { PageShell } from "@/components/layout/PageShell";
import { ProductsPageSection } from "@/components/sections/ProductsPageSection";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";


export const metadata: Metadata = {
  title: "Products",
  description: "Browse through our exquisite collection of premium fabrics and ethnic wear for men.",
};

export default function ProductsPage() {
  return (
    <PageShell>
      <PageHero
        label="By the meter"
        title="Premium fabrics"
        description="From heritage silks to contemporary blends — materials chosen for drape, durability, and character."
        imageSrc="https://images.unsplash.com/photo-1558171813-1c0887535cc1?w=1920&q=85"
        imageAlt="Fine fabric rolls and textile samples"
      />
       
      
      <main className="min-h-screen bg-primary">
        <ProductsPageSection />
      </main>
    </PageShell>
  );
}
