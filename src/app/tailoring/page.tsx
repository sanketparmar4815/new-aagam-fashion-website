import { PageHero } from "@/components/layout/PageHero";
import { PageShell } from "@/components/layout/PageShell";
import { TailoringProcessSection } from "@/components/sections/TailoringProcessSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Tailoring",
  description:
    "Bespoke tailoring services — from first fitting to final press, crafted to your measurements.",
};

export default function TailoringPage() {
  return (
    <PageShell>
      <PageHero
        label="Bespoke atelier"
        title="Custom tailoring"
        description="Every garment is shaped to your form, occasion, and vision — guided by master tailors at every step."
        imageSrc="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1920&q=85"
        imageAlt="Tailor measuring fine fabric at the worktable"
      />
      <TailoringProcessSection />
      <WhyChooseSection />
    </PageShell>
  );
}
