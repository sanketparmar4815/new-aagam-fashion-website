"use client";

import { bestSellers } from "@/data/products";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function ProductCard({
  p,
  className,
}: {
  p: (typeof bestSellers)[number];
  className?: string;
}) {
  return (
    <article className={cn("group", className)}>
      <Link
        href={p.href}
        className="block overflow-hidden rounded-card bg-surface-highest shadow-ambient transition hover:-translate-y-1 hover:bg-surface-high"
      >
        <div className="relative aspect-[3/4]">
          <Image
            src={p.image}
            alt={p.alt}
            fill
            className="object-cover transition duration-700 group-hover:scale-[1.03]"
            sizes="(max-width:768px) 100vw, 33vw"
          />
          {p.badge ? (
            <span className="absolute left-4 top-4 rounded-sm bg-accent px-2 py-1 font-body text-[10px] font-bold uppercase tracking-wider text-primary">
              {p.badge}
            </span>
          ) : null}
        </div>
        <div className="space-y-2 px-5 py-6">
          <h3 className="font-display text-xl text-on-surface">{p.name}</h3>
          <p className="font-body text-sm font-semibold text-primary">{p.price}</p>
          <span className="inline-block font-body text-xs font-semibold uppercase tracking-[0.2em] text-accent-muted underline decoration-accent-muted/60 underline-offset-4">
            Learn more →
          </span>
        </div>
      </Link>
    </article>
  );
}

export function BestSellersSection() {
  const [index, setIndex] = useState(0);
  const active = bestSellers[index];

  return (
    <section
      id="best-sellers"
      className="bg-surface py-20 md:py-28"
      aria-labelledby="best-sellers-heading"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <header className="mx-auto mb-14 max-w-2xl text-center">
          <h2
            id="best-sellers-heading"
            className="font-display text-3xl font-medium tracking-tight text-on-surface md:text-5xl"
          >
            Best sellers
          </h2>
          <p className="mt-4 font-body text-sm leading-relaxed text-muted md:text-base">
            The pieces our clients return for — fabrics with soul, tailoring with
            precision.
          </p>
        </header>

        <div className="md:hidden">
          {active ? <ProductCard p={active} /> : null}
          <div className="mt-8 flex justify-center gap-2">
            {bestSellers.map((p, i) => (
              <button
                key={p.id}
                type="button"
                aria-label={`Show ${p.name}`}
                className={cn(
                  "h-2 rounded-full transition-all",
                  i === index ? "w-8 bg-primary" : "w-2 bg-on-surface/20"
                )}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

        <div className="hidden gap-8 md:grid md:grid-cols-3">
          {bestSellers.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
