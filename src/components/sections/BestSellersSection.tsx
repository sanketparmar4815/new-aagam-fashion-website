"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const categories = [
  {
    id: "cat-1",
    name: "Bespoke Suits",
    image: "https://images.unsplash.com/photo-1598808503746-f34c53b20ef3?w=800&q=80",
    alt: "Premium tailored suits hanging in custom wardrobe",
    href: "/clothing/",
  },
  {
    id: "cat-2",
    name: "Luxury Shirts",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=85",
    alt: "Pressed luxury dress shirts on display",
    href: "/clothing/",
  },
  {
    id: "cat-3",
    name: "Italian Silks",
    image: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=800&q=80",
    alt: "Golden Italian silk swatches texturing",
    href: "/clothing/",
  },
  {
    id: "cat-4",
    name: "Tuxedos & Eveningwear",
    image: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=800&q=85",
    alt: "Bespoke dinner tuxedo on a tailoring model",
    href: "/clothing/",
  },
  {
    id: "cat-5",
    name: "Custom Accessories",
    image: "https://images.unsplash.com/photo-1473966968600-fa801869a0a4?w=800&q=85",
    alt: "Fine leather shoes and accessories drape",
    href: "/clothing/",
  },
];

export function BestSellersSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const handleScroll = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const maxScroll = container.scrollWidth - container.clientWidth;

      // Calculate progress percentage
      if (maxScroll > 0) {
        setScrollProgress(container.scrollLeft / maxScroll);
      }

      // Update arrows visibility states
      setCanScrollLeft(container.scrollLeft > 5);
      setCanScrollRight(container.scrollLeft < maxScroll - 5);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const card = container.firstElementChild as HTMLElement;
      const scrollOffset = card ? card.clientWidth + 24 : 360; // card width + gap

      container.scrollBy({
        left: direction === "left" ? -scrollOffset : scrollOffset,
        behavior: "smooth",
      });
    }
  };

  // Run handleScroll once on mount to establish correct initial states and reset scroll position
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 0; // Prevent browser from auto-scrolling to cached scroll state
    }
    handleScroll();
    window.addEventListener("resize", handleScroll);
    return () => window.removeEventListener("resize", handleScroll);
  }, []);

  return (
    <section
      id="best-sellers"
      className="bg-surface py-20 md:py-28 overflow-hidden"
      aria-labelledby="best-sellers-heading"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10 mb-14">
        <header className="max-w-2xl">
          <span className="font-body text-xs font-bold uppercase tracking-[0.25em] text-accent-muted">
            Our Collections
          </span>
          <h2
            id="best-sellers-heading"
            className="mt-4 font-display text-3xl font-medium tracking-tight text-primary md:text-5xl"
          >
            Best Sellers
          </h2>
          <p className="mt-4 font-body text-sm leading-relaxed text-muted md:text-base">
            The pieces our clients return for — fabrics with heritage, tailoring with precision.
          </p>
        </header>
      </div>

      {/* Slider Wrapper: constrained to max-w-7xl, matching header alignment */}
      <div className="mx-auto max-w-7xl px-5 md:px-10 relative">
        {/* Left Arrow Button */}
        {canScrollLeft && (
          <button
            type="button"
            onClick={() => scroll("left")}
            className="absolute left-2 lg:-left-6 top-[40%] -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface shadow-ambient transition hover:bg-surface-low text-primary"
            aria-label="Previous category"
          >
            <ArrowLeft className="h-5 w-5" strokeWidth={1.5} />
          </button>
        )}

        {/* Right Arrow Button */}
        {canScrollRight && (
          <button
            type="button"
            onClick={() => scroll("right")}
            className="absolute right-2 lg:-right-6 top-[40%] -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface shadow-ambient transition hover:bg-surface-low text-primary"
            aria-label="Next category"
          >
            <ArrowRight className="h-5 w-5" strokeWidth={1.5} />
          </button>
        )}

        {/* Horizontal Scrollable Container (overflow is clipped inside the max-w-7xl frame) */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory pb-8"
        >
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="w-[280px] sm:w-[320px] md:w-[360px] flex-shrink-0 snap-start flex flex-col items-center animate-fade-in"
            >
              {/* Image Frame */}
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-sm bg-neutral-50">
                <img
                  src={cat.image}
                  alt={cat.alt}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>

              {/* Text Label with underline */}
              <Link
                href={cat.href}
                className="mt-6 group relative pb-1.5 font-display text-sm font-semibold uppercase tracking-[0.18em] text-primary transition duration-300 hover:text-accent-muted"
              >
                {cat.name}
                <span className="absolute bottom-0 left-0 h-[1.5px] w-full bg-primary transition-colors duration-300 group-hover:bg-accent-muted" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Scrollbar Indicator */}
      <div className="mx-auto max-w-7xl px-5 md:px-10 mt-6">
        <div className="relative h-[2px] w-80 bg-on-surface/10">
          <div
            className="absolute top-[-1px] h-[4px] w-20 bg-primary transition-all duration-100 ease-out"
            style={{
              left: `${scrollProgress * (320 - 80)}px`,
            }}
          />
        </div>
      </div>
    </section>
  );
}
