"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.36; // Set slow motion to 55% speed
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative flex h-screen items-center justify-center overflow-hidden pt-24"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          src="/hero-bg.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
          preload="auto"
        />
        <div className="absolute inset-0 bg-black/20" />
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
        <div className="mt-12 flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-16">
          <Link
            href="/products/"
            className="group relative pb-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-surface transition-colors duration-300 hover:text-primary"
          >
            Shop collection
            <span className="absolute bottom-0 left-0 h-[2px] w-full bg-surface transition-opacity duration-300 group-hover:opacity-0" />
            <span className="absolute bottom-0 left-0 h-[2px] w-full bg-primary transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100" />
          </Link>
          <Link
            href="/tailoring/"
            className="group relative pb-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-surface transition-colors duration-300 hover:text-primary"
          >
            Custom tailoring
            <span className="absolute bottom-0 left-0 h-[2px] w-full bg-surface transition-opacity duration-300 group-hover:opacity-0" />
            <span className="absolute bottom-0 left-0 h-[2px] w-full bg-primary transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100" />
          </Link>
        </div>
      </div>
    </section>
  );
}
