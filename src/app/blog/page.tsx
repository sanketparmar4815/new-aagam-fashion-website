import { PageHero } from "@/components/layout/PageHero";
import { PageShell } from "@/components/layout/PageShell";
import { InstagramSection } from "@/components/sections/InstagramSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Stories, style notes, and behind-the-scenes glimpses from the Aagam Fashion atelier.",
};

export default function BlogPage() {
  return (
    <PageShell>
      <PageHero
        label="Journal"
        title="Blog & inspiration"
        description="Editorial notes on fabric, fit, and the craft behind every Aagam Fashion piece."
        imageSrc="https://images.unsplash.com/photo-1445205170230-053b83016050?w=1920&q=85"
        imageAlt="Fashion editorial styling setup"
      />
      <InstagramSection />
    </PageShell>
  );
}
