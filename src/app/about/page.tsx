import { PageHero } from "@/components/layout/PageHero";
import { PageShell } from "@/components/layout/PageShell";
import { OurExpertiseSection } from "@/components/sections/OurExpertiseSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { AboutCtaSection } from "@/components/sections/AboutCtaSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Aagam Fashion - Bespoke Menswear & Fabrics",
  description:
    "Discover the heritage of Aagam Fashion — 30+ years of luxury fabrics, master bespoke tailoring, and sartorial excellence for men.",
};

export default function AboutPage() {
  return (
    <PageShell>
      {/* 1. Full-Screen Video Hero Section */}
      <PageHero
        label="Atelier & Fabric House Since 1994"
        title="Crafting Excellence in Men's Bespoke Tailoring & Fine Fabrics"
        description="Over 30 years of dedicated master tailoring, hand-curated global weaves, and uncompromising sartorial precision for the discerning gentleman."
        videoSrc="/about-tailoring.mp4"
        fullScreen={true}
        imageSrc="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=1920&q=85"
        imageAlt="Master tailor measuring fine fabric in atelier"
      />

      {/* 2. Three Pillars of Expertise */}
      <OurExpertiseSection />

    </PageShell>
  );
}
