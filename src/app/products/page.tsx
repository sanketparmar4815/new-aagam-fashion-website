import { PageShell } from "@/components/layout/PageShell";
import { ProductsPageSection } from "@/components/sections/ProductsPageSection";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Products",
  description: "Browse through our exquisite collection of premium fabrics and ethnic wear for men.",
};

export default function ProductsPage() {
  return (
    <PageShell>

      
      <main className="min-h-screen bg-primary">
        <ProductsPageSection />
      </main>
    </PageShell>
  );
}
