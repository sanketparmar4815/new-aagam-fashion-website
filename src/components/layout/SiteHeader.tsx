"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, Search, X } from "lucide-react";

const nav = [
  { label: "Home", href: "/" },
  { label: "Clothing", href: "/clothing/" },
  { label: "Fabric", href: "/fabric/" },
  { label: "Custom tailoring", href: "/tailoring/" },
  { label: "About", href: "/about/" },
  { label: "Blog", href: "/blog/" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b border-ghost-outline backdrop-blur-xl transition-all duration-500",
          scrolled
            ? "bg-surface/95 py-3 shadow-ambient"
            : "bg-surface/88 py-4 shadow-sm"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 md:px-10">
          <Link
            href="/"
            className="font-display text-xl font-medium tracking-tight text-on-surface md:text-2xl"
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
                className="font-body text-[11px] font-semibold uppercase tracking-[0.2em] text-on-surface transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-on-surface transition-colors hover:bg-surface-low"
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
            >
              <Search className="h-5 w-5" strokeWidth={1.25} />
            </button>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-on-surface lg:hidden"
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
              className="font-display text-2xl text-on-surface"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Search dialog */}
      <div
        className={cn(
          "fixed inset-0 z-[60] flex items-start justify-center bg-on-surface/40 px-4 pt-24 transition",
          searchOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Search"
        onClick={(e) => {
          if (e.target === e.currentTarget) setSearchOpen(false);
        }}
      >
        <div className="w-full max-w-lg rounded-card bg-surface p-6 shadow-ambient">
          <div className="mb-4 flex items-center justify-between">
            <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Search
            </span>
            <button
              type="button"
              className="rounded-lg p-2 hover:bg-surface-low"
              aria-label="Close search"
              onClick={() => setSearchOpen(false)}
            >
              <X className="h-5 w-5" strokeWidth={1.25} />
            </button>
          </div>
          <input
            type="search"
            placeholder="Fabrics, suits, occasions…"
            className="w-full border-b border-on-surface/20 bg-transparent py-3 font-body text-on-surface outline-none transition focus:border-primary"
          />
        </div>
      </div>
    </>
  );
}
