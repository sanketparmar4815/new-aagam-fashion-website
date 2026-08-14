import { expertiseCards } from "@/data/expertise";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Layers, Scissors, Shirt } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const icons = {
  shirt: Shirt,
  layers: Layers,
  scissors: Scissors,
} as const;

export function OurExpertiseSection() {
  return (
    <section
      id="our-expertise"
      className="bg-surface py-20 md:py-28"
      aria-labelledby="expertise-heading"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <ScrollReveal offset={24}>
          <header className="mx-auto mb-14 max-w-2xl text-center">
            <h2
              id="expertise-heading"
              className="mt-5 text-center font-display text-3xl font-bold tracking-tight text-primary md:text-5xl"
            >
              Our expertise
            </h2>
            <p className="mt-4 font-body text-sm leading-relaxed text-muted md:text-base">
              Three pillars — each led by specialists who treat cloth and cut as a single
              conversation.
            </p>
          </header>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-3">
          {expertiseCards.map((card, idx) => {
            const Icon = icons[card.icon];
            return (
              <ScrollReveal key={card.id} delay={idx * 120} offset={28}>
                <article
                  className="flex flex-col items-center rounded-card bg-surface-low/80 px-8 py-10 text-center shadow-ambient transition-all duration-300
                  border border-white/10
                  hover:-translate-y-3
                  hover:scale-[1.02]
                  hover:border-primary/30
                  hover:shadow-[0_25px_80px_rgba(0,0,0,0.35)]"
                >
                  <span className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary-container text-surface">
                    <Icon className="h-7 w-7" strokeWidth={1.25} />
                  </span>
                  <h3 className="font-display text-2xl text-on-surface">{card.title}</h3>
                  <p className="mt-4 font-body text-sm leading-relaxed text-muted">
                    {card.description}
                  </p>
                  <Link
                    href={card.href}
                    className={cn(
                      "mt-8 font-body text-xs font-semibold uppercase tracking-[0.2em]",
                      "text-primary underline decoration-primary/30 underline-offset-4"
                    )}
                  >
                    Explore more
                  </Link>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
