import { PageShell } from "@/components/layout/PageShell";
import { FeaturedCollectionSection } from "@/components/sections/FeaturedCollectionSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { OurExpertiseSection } from "@/components/sections/OurExpertiseSection";
import OurNumbersSection from "@/components/sections/OurNumbersSections";

import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { HomeProductGridSection } from "@/components/sections/HomeProductGridSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { StatsCounterSection } from "@/components/sections/StatsCounterSection";

export default function HomePage() {
  return (
    <PageShell>
      <HeroSection />
      <OurNumbersSection />
      <FeaturedCollectionSection />
      <HomeProductGridSection />
      <WhyChooseUsSection />
      <StatsCounterSection />
      <OurExpertiseSection />
      <TestimonialsSection />
    </PageShell>
  );
}
