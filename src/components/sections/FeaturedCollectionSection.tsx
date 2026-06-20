"use client";

import { featuredCollectionSlides } from "@/data/collections";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

function SlideCard({ slide }: { slide: (typeof featuredCollectionSlides)[number] }) {
  return (
    <Link
      href={slide.href}
      className="group relative block overflow-hidden rounded-card transition"
    >
      <div className="relative aspect-[3/5] min-h-[320px]">
        <Image
          src={slide.image}
          alt={slide.alt}
          fill
          className="object-cover transition duration-700 group-hover:scale-[1.04]"
          sizes="(max-width:768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-on-surface/75 via-on-surface/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6">
          <p className="font-accent text-xs italic tracking-[0.15em] text-accent">
            {slide.eyebrow}
          </p>
          <p className="mt-1 font-display text-2xl text-surface">{slide.title}</p>
        </div>
      </div>
    </Link>
  );
}

export function FeaturedCollectionSection() {
  const [i, setI] = useState(0);
  const total = featuredCollectionSlides.length;
  const prev = () => setI((v) => (v - 1 + total) % total);
  const next = () => setI((v) => (v + 1) % total);
  const active = featuredCollectionSlides[i];

  return (
    <section
      id="featured-collection"
      className="bg-primary-container py-20 text-surface md:py-28"
      aria-labelledby="featured-heading"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <header>
            <h2
              id="featured-heading"
              className="font-display text-3xl font-medium tracking-tight md:text-5xl"
            >
              Featured collection
            </h2>
            <p className="mt-3 max-w-xl font-body text-sm text-surface/75 md:text-base">
              Limited capsules — editorial textures and silhouettes for the season.
            </p>
          </header>
          <div className="flex gap-2 self-end sm:self-auto">
            <button
              type="button"
              onClick={prev}
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-surface/25 text-surface transition hover:bg-surface/10"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={1.25} />
            </button>
            <button
              type="button"
              onClick={next}
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-surface/25 text-surface transition hover:bg-surface/10"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" strokeWidth={1.25} />
            </button>
          </div>
        </div>

        <div className="md:hidden">
          {active ? <SlideCard slide={active} /> : null}
          <div className="mt-8 flex justify-center gap-2">
            {featuredCollectionSlides.map((slide, idx) => (
              <button
                key={slide.id}
                type="button"
                aria-label={`Show ${slide.title}`}
                className={cn(
                  "h-2 rounded-full transition-all",
                  idx === i ? "w-8 bg-accent" : "w-2 bg-surface/25"
                )}
                onClick={() => setI(idx)}
              />
            ))}
          </div>
        </div>

        <div className="hidden gap-6 md:grid md:grid-cols-3">
          {featuredCollectionSlides.map((slide) => (
            <SlideCard key={slide.id} slide={slide} />
          ))}
        </div>
      </div>
    </section>
  );
}
