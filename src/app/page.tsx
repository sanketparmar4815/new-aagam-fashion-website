import { PageShell } from "@/components/layout/PageShell";
import { FeaturedCollectionSection } from "@/components/sections/FeaturedCollectionSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { OurExpertiseSection } from "@/components/sections/OurExpertiseSection";
import OurNumbersSection from "@/components/sections/OurNumbersSections";

import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export default function HomePage() {
  return (
    <PageShell>
      <HeroSection />
      <OurNumbersSection />
      <FeaturedCollectionSection />
      <OurExpertiseSection />
      <TestimonialsSection />
    </PageShell>
  );
}
