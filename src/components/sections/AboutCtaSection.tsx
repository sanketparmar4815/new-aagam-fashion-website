import Link from "next/link";
import { ArrowRight, Scissors, Sparkles } from "lucide-react";

export function AboutCtaSection() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground md:py-28">
      {/* Background ambient lighting glow */}
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl px-5 text-center md:px-10">
        <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 font-body text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-6">
          <Sparkles className="h-3.5 w-3.5" />
          Bespoke Experience
        </span>

        <h2 className="font-display text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl text-white mb-6">
          Experience the Art of Custom Fit
        </h2>

        <p className="mx-auto max-w-2xl font-body text-base leading-relaxed text-primary-foreground/80 md:text-lg mb-10">
          Whether you require handpicked Giza cottons, pure linens, or a full custom-tailored suit for a special occasion — our master tailors are ready to craft your vision.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <Link
            href="/tailoring"
            className="group flex items-center gap-3 rounded-xl bg-accent px-8 py-4 font-body text-xs font-bold uppercase tracking-[0.2em] text-primary shadow-lg transition-all hover:bg-accent/90 hover:scale-105"
          >
            <Scissors className="h-4 w-4" />
            Book Tailoring Fitting
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/fabric"
            className="group flex items-center gap-3 rounded-xl border border-white/20 bg-white/5 px-8 py-4 font-body text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm transition-all hover:border-accent hover:bg-white/10"
          >
            Explore Fabric Library
          </Link>
        </div>
      </div>
    </section>
  );
}
