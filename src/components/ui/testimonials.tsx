"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";

export interface UiTestimonial {
  image: string;
  name: string;
  username: string;
  text: string;
  social: string;
}

interface TestimonialsProps {
  testimonials: UiTestimonial[];
  className?: string;
  title?: string;
  description?: string;
  maxDisplayed?: number;
}

export function Testimonials({
  testimonials,
  className,
  title = "Read what people are saying",
  description = "Dummy feedback from virtual customers using our component library.",
  maxDisplayed = 6,
}: TestimonialsProps) {
  const [showAll, setShowAll] = useState(false);

  const openInNewTab = (url: string) => {
    window.open(url, "_blank")?.focus();
  };

  return (
    <div className={className}>
      <div className="flex flex-col items-center justify-center pt-5">
        <div className="mb-8 flex flex-col gap-5">
          <h2
            id="testimonials-heading"
            className="text-center font-display text-3xl font-medium tracking-tight text-on-surface md:text-5xl"
          >
            {title}
          </h2>
          <p className="text-center font-body text-muted-foreground">
            {description.split("<br />").map((line, i) => (
              <span key={i}>
                {line}
                {i !== description.split("<br />").length - 1 && <br />}
              </span>
            ))}
          </p>
        </div>
      </div>

      <div className="relative">
        <div
          className={cn(
            "flex flex-wrap items-center justify-center gap-5",
            !showAll &&
              testimonials.length > maxDisplayed &&
              "max-h-[720px] overflow-hidden"
          )}
        >
          {testimonials
            .slice(0, showAll ? undefined : maxDisplayed)
            .map((testimonial, index) => (
              <Card
                key={`${testimonial.name}-${index}`}
                className="relative h-auto w-80 border-border bg-card p-5 shadow-ambient"
              >
                <div className="flex items-center">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full object-cover"
                  />
                  <div className="flex flex-col pl-4">
                    <span className="text-base font-semibold text-foreground">
                      {testimonial.name}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {testimonial.username}
                    </span>
                  </div>
                </div>
                <div className="mb-5 mt-5">
                  <p className="font-medium text-foreground">{testimonial.text}</p>
                </div>
                <button
                  type="button"
                  onClick={() => openInNewTab(testimonial.social)}
                  className="absolute right-4 top-4 transition-opacity hover:opacity-80"
                  aria-label={`Open ${testimonial.name} on social`}
                >
                  <Icons.twitter className="h-4 w-4" aria-hidden="true" />
                </button>
              </Card>
            ))}
        </div>

        {testimonials.length > maxDisplayed && !showAll && (
          <>
            <div className="absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-background to-transparent" />
            <div className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2 transform">
              <Button variant="secondary" onClick={() => setShowAll(true)}>
                Load more
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
