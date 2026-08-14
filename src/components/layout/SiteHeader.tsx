"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

import { useLenis } from "@/components/layout/SmoothScrollProvider";

const nav = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products/" },
  { label: "Fabric", href: "/fabric/" },
  { label: "Custom tailoring", href: "/tailoring/" },
  { label: "About", href: "/about/" },
  // { label: "Blog", href: "/blog/" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isDarkInitial =
    pathname?.startsWith("/products") || pathname?.startsWith("/fabric");
  const lenis = useLenis();

  useEffect(() => {
    const onScroll = () => {
      const scrollY = lenis ? lenis.scroll : window.scrollY;
      setScrolled(scrollY > 24);
    };

    onScroll();

    if (lenis) {
      lenis.on("scroll", onScroll);
      return () => {
        lenis.off("scroll", onScroll);
      };
    } else {
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }
  }, [lenis]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      lenis?.stop();
    } else {
      document.body.style.overflow = "";
      lenis?.start();
    }
    return () => {
      document.body.style.overflow = "";
      lenis?.start();
    };
  }, [open, lenis]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 backdrop-blur-xl transition-all duration-500",
          scrolled
            ? "bg-surface/95 border-b border-ghost-outline py-3 shadow-ambient"
            : "bg-transparent border-b border-transparent py-5"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 md:px-10">
          <Link
            href="/"
            className={cn(
              "font-display text-xl font-medium tracking-tight transition-colors duration-500 md:text-2xl",
              scrolled || isDarkInitial ? "text-primary" : "text-white"
            )}
          >
            Aagam Fashion
          </Link>

          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Primary"
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "font-body text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors duration-500",
                  scrolled || isDarkInitial
                    ? "text-primary hover:text-accent-muted"
                    : "text-white hover:text-accent"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <button
              type="button"
              className={cn(
                "inline-flex h-11 w-11 items-center justify-center rounded-lg lg:hidden transition-colors duration-500",
                scrolled || isDarkInitial ? "text-primary" : "text-white"
              )}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? (
                <X className="h-5 w-5" strokeWidth={1.25} />
              ) : (
                <Menu className="h-5 w-5" strokeWidth={1.25} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-x-0 bottom-0 top-[4.5rem] z-40 bg-surface/95 backdrop-blur-md transition lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
        aria-hidden={!open}
      >
        <nav
          className="mx-auto flex max-w-md flex-col gap-6 px-8 pb-10 pt-10"
          aria-label="Mobile primary"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-display text-2xl text-primary"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>


    </>
  );
}
