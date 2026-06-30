"use client";

import { featuredCollectionSlides } from "@/data/collections";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUp } from "lucide-react";
import { useRef } from "react";

function SlideCard({ slide }: { slide: (typeof featuredCollectionSlides)[number] }) {
  const whatsappMsg = `Hi Aagam Fashion, I am very interested in your luxury "${slide.title}" from your Opulence Collection. Could you please share more details regarding fabric availability and custom tailoring options?`;
  const whatsappUrl = `https://api.whatsapp.com/send/?phone=7600050236&text=${encodeURIComponent(whatsappMsg)}&type=phone_number&app_absent=0`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-xl border border-accent/40 bg-primary-container transition-all duration-300 hover:border-accent hover:shadow-ambient hover:-translate-y-1 min-w-[280px] md:min-w-[360px] snap-center shrink-0"
    >
      <div className="relative aspect-[4/5] w-full bg-surface-low overflow-hidden">
        <Image
          src={slide.image}
          alt={slide.alt}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
          sizes="(max-width:768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute right-4 top-4 rounded-full bg-accent px-4 py-1.5 text-xs font-bold text-accent-foreground shadow-md">
          {slide.eyebrow}
        </div>
      </div>
      <div className="relative border-t border-accent/20 bg-primary-container h-[72px] overflow-hidden">
        {/* Default State Text */}
        <div className="absolute inset-0 flex items-center px-5 transition-transform duration-300 group-hover:-translate-y-full">
          <p className="font-body text-lg font-semibold text-primary-foreground">{slide.title}</p>
        </div>

        {/* Hover State Button */}
        <div className="absolute inset-0 flex items-center justify-center px-4 transition-transform duration-300 translate-y-full group-hover:translate-y-0">
          <span className="w-full rounded-md bg-accent py-2 text-center text-sm font-bold text-accent-foreground shadow-md transition-colors hover:bg-accent/90">
            Know More
          </span>
        </div>
      </div>
    </a>
  );
}

export function FeaturedCollectionSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -380, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 380, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="featured-collection"
      className="relative bg-primary py-20 text-primary-foreground md:py-28 overflow-hidden"
      aria-labelledby="featured-heading"
    >
      <div className="mx-auto max-w-7xl px-5 text-center md:px-10 mb-10">
        <h2
          id="featured-heading"
          className="font-display text-4xl font-medium tracking-tight text-accent md:text-5xl"
        >
          Best Sellers
        </h2>
        <p className="mx-auto mt-4 max-w-2xl font-body text-sm text-primary-foreground/80 md:text-base">
          Explore our most popular styles chosen by gentlemen who value distinction and class.
        </p>
      </div>

      <div className="relative mx-auto max-w-[1600px] group/carousel">
        {/* Navigation Arrows */}
        <button
          onClick={scrollLeft}
          className="absolute left-2 top-[40%] z-10 -translate-y-1/2 rounded-full bg-primary-container border border-surface/10 p-3.5 text-primary-foreground shadow-xl transition hover:border-accent hover:text-accent md:left-6"
          aria-label="Previous items"
        >
          <ArrowLeft className="h-5 w-5" strokeWidth={1.5} />
        </button>

        <button
          onClick={scrollRight}
          className="absolute right-2 top-[40%] z-10 -translate-y-1/2 rounded-full bg-primary-container border border-surface/10 p-3.5 text-primary-foreground shadow-xl transition hover:border-accent hover:text-accent md:right-6"
          aria-label="Next items"
        >
          <ArrowRight className="h-5 w-5" strokeWidth={1.5} />
        </button>

        {/* Carousel Track */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-5 pb-8 pt-4 md:px-24"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <style dangerouslySetInnerHTML={{
            __html: `
            .flex::-webkit-scrollbar { display: none; }
          `}} />

          {/* Render actual slides */}
          {featuredCollectionSlides.map((slide) => (
            <SlideCard key={slide.id} slide={slide} />
          ))}
          {/* Duplicate slides just to fill out the carousel visually for the demo */}
          {featuredCollectionSlides.map((slide) => (
            <SlideCard key={`${slide.id}-dup1`} slide={{ ...slide, id: `${slide.id}-dup1` }} />
          ))}
          {featuredCollectionSlides.map((slide) => (
            <SlideCard key={`${slide.id}-dup2`} slide={{ ...slide, id: `${slide.id}-dup2` }} />
          ))}
        </div>
      </div>

      {/* Scroll to top floating button */}
      {/* <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="absolute bottom-8 right-8 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg transition hover:scale-105 hover:bg-accent/90"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-6 w-6" strokeWidth={2} />
      </button> */}
    </section>
  );
}
