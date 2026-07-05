import { PageShell } from "@/components/layout/PageShell";
import { HeroSection } from "@/components/sections/HeroSection";
import { OurExpertiseSection } from "@/components/sections/OurExpertiseSection";
import { AboutUsSection } from "@/components/sections/AboutUsSection";
import { BestSellersSection } from "@/components/sections/BestSellersSection";

import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { HomeProductGridSection } from "@/components/sections/HomeProductGridSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { StatsCounterSection } from "@/components/sections/StatsCounterSection";

export default function HomePage() {
  return (
    <PageShell>
      <HeroSection />
      <AboutUsSection />
      <BestSellersSection />
      <WhyChooseUsSection />
      <HomeProductGridSection />
      {/* <StatsCounterSection /> */}
      <OurExpertiseSection />
      <TestimonialsSection />
    </PageShell>
  );
}
