import { craftFeatures } from "@/data/craftsmanship";
import Image from "next/image";
import Link from "next/link";

export function CraftsmanshipSection() {
  return (
    <section
      id="craftsmanship"
      className="bg-primary py-20 text-surface md:py-28"
      aria-labelledby="craft-heading"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-10">
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-card">
            <Image
              src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=900&q=85"
              alt="Tailored suit on mannequin"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 45vw"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 w-[42%] max-w-[220px] overflow-hidden rounded-card border-4 border-surface shadow-ambient">
            <div className="relative aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&q=85"
                alt="Tailoring tools and hands at work"
                fill
                className="object-cover"
                sizes="200px"
              />
            </div>
          </div>
        </div>

        <div>
          <h2
            id="craft-heading"
            className="font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl"
          >
            Craftsmanship without compromise
          </h2>
          <p className="mt-6 font-body text-sm leading-relaxed text-surface/80 md:text-base">
            We steward every garment from first measurement to final press — honoring the
            discipline of the atelier while embracing the pace of modern life.
          </p>

          <ul className="mt-10 grid grid-cols-2 gap-6">
            {craftFeatures.map((f) => (
              <li key={f.id} className="rounded-card bg-surface/5 p-4 backdrop-blur-sm">
                <p className="font-display text-2xl text-accent">{f.title}</p>
                <p className="mt-1 font-body text-xs uppercase tracking-[0.15em] text-surface/70">
                  {f.subtitle}
                </p>
              </li>
            ))}
          </ul>

          <Link
            href="/tailoring/"
            className="mt-10 inline-block font-body text-xs font-semibold uppercase tracking-[0.2em] text-accent underline decoration-accent/50 underline-offset-[6px]"
          >
            How we work →
          </Link>
        </div>
      </div>
    </section>
  );
}
