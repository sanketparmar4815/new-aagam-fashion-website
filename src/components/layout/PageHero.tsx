import { cn } from "@/lib/utils";
import Image from "next/image";

interface PageHeroProps {
  title: string;
  label?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
}

export function PageHero({
  title,
  label,
  description,
  imageSrc = "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&q=85",
  imageAlt = "Fashion atelier interior",
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative flex min-h-[42vh] items-end overflow-hidden pt-24 md:min-h-[48vh]",
        className
      )}
      aria-labelledby="page-hero-heading"
    >
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-on-surface/50 via-on-surface/55 to-on-surface/80" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-12 md:px-10 md:pb-16">
        {label && (
          <p className="mb-3 font-accent text-sm italic tracking-[0.12em] text-surface/90 md:text-base">
            {label}
          </p>
        )}
        <h1
          id="page-hero-heading"
          className="font-display text-4xl font-medium leading-tight tracking-tight text-surface md:text-5xl lg:text-6xl"
        >
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-surface/85 md:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
