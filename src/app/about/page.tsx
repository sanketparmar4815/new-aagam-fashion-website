import { PageHero } from "@/components/layout/PageHero";
import { PageShell } from "@/components/layout/PageShell";
import { CraftsmanshipSection } from "@/components/sections/CraftsmanshipSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind Aagam Fashion — craftsmanship, heritage, and the modern Mumbai atelier.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        label="Our story"
        title="About Aagam Fashion"
        description="A Mumbai atelier rooted in tradition, devoted to fabrics, fit, and the quiet discipline of fine tailoring."
        imageSrc="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=1920&q=85"
        imageAlt="Tailored suit on mannequin in atelier"
      />
      <CraftsmanshipSection />
      <TestimonialsSection />
    </PageShell>
  );
}
