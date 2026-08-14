"use client";

import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const features = [
  {
    title: "Heritage Since 1992",
    description: "Over three decades of serving Surat with the finest fabrics and unwavering commitment to quality.",
    highlighted: true,
  },
  {
    title: "Premium Quality Fabrics",
    description: "Sourced from the world's finest mills, our fabrics reflect luxury, comfort, and sophistication.",
  },
  {
    title: "Expert Craftsmanship",
    description: "Every piece is crafted with meticulous attention to detail by our skilled artisans.",
  },
  {
    title: "8 Premium Showrooms",
    description: "Conveniently located across Surat for an exceptional in-store experience.",
  },
  {
    title: "Modern Aesthetics",
    description: "Timeless designs that perfectly blend traditional elegance with contemporary style.",
  },
  {
    title: "Customer First",
    description: "Dedicated to providing personalized service and building lasting relationships.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="bg-surface py-20 md:py-28 text-on-surface">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <header className="mb-16 text-center">
          <ScrollReveal delay={100} offset={24}>
            <h2 className="font-display text-4xl font-medium tracking-tight text-primary md:text-5xl">
              Why Choose <span className="text-accent-muted">AAGAM FASHION</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={250} offset={20}>
            <p className="mx-auto mt-4 max-w-2xl font-body text-sm text-muted md:text-base">
              Experience the perfect blend of tradition, craftsmanship, and modern luxury
            </p>
          </ScrollReveal>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <ScrollReveal key={idx} delay={100 + (idx % 3) * 120} offset={28}>
              <div
                className={cn(
                  "rounded-2xl border bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-ambient hover:scale-[1.01]",
                  feature.highlighted
                    ? "border-accent-muted shadow-ambient"
                    : "border-border/60 hover:border-accent-muted/40"
                )}
              >
                <div className="mb-6 inline-flex rounded-lg bg-accent p-3 text-accent-foreground shadow-md transition-transform duration-300 hover:scale-110">
                  <Sparkles className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h3 className="mb-3 font-display text-xl font-semibold text-primary">
                  {feature.title}
                </h3>
                <p className="font-body text-sm leading-relaxed text-muted">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
