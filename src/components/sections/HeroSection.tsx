import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[92vh] items-center justify-center overflow-hidden pt-24"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1920&q=88"
          alt="Tailor measuring fine fabric at the worktable"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-on-surface/55 via-on-surface/45 to-primary-container/85" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-surface">
        <p className="mb-4 font-accent text-sm italic tracking-[0.12em] text-surface/90 md:text-base">
          The modern atelier
        </p>
        <h1
          id="hero-heading"
          className="font-display text-4xl font-medium leading-tight tracking-tight md:text-6xl lg:text-7xl"
        >
          Aagam Fashion: Crafted Fabrics, Tailored Perfection.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl font-body text-base leading-relaxed text-surface/85 md:text-lg">
          Premium quality fabrics, designer wear, and bespoke tailoring services
          designed to bring your fashion vision to life.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/clothing/"
            className="inline-flex min-w-[200px] items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary-container px-10 py-4 font-body text-xs font-semibold uppercase tracking-[0.15em] text-surface shadow-ambient transition hover:opacity-95"
          >
            Shop collection
          </Link>
          <Link
            href="/tailoring/"
            className="inline-flex min-w-[200px] items-center justify-center rounded-lg border border-surface/80 bg-transparent px-10 py-4 font-body text-xs font-semibold uppercase tracking-[0.15em] text-surface transition hover:bg-surface/10"
          >
            Custom tailoring
          </Link>
        </div>
      </div>
    </section>
  );
}
