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
      <div className="pt-16 md:pt-20">
        <FabricSection />
      </div>
    </PageShell>
  );
}
