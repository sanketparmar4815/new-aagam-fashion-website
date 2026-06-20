import { newArrivals } from "@/data/products";
import Image from "next/image";
import Link from "next/link";

export function NewArrivalsSection() {
  return (
    <section
      id="new-arrivals"
      className="bg-surface-low py-20 md:py-28"
      aria-labelledby="new-arrivals-heading"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <h2
            id="new-arrivals-heading"
            className="font-display text-3xl font-medium tracking-tight text-on-surface md:text-5xl"
          >
            New arrivals
          </h2>
          <Link
            href="/clothing/#best-sellers"
            className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary underline decoration-primary/30 underline-offset-4"
          >
            View all
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {newArrivals.map((p) => (
            <Link
              key={p.id}
              href={p.href}
              className="group block overflow-hidden rounded-card bg-surface shadow-ambient transition hover:-translate-y-1"
            >
              <div className="relative aspect-[3/4]">
                <Image
                  src={p.image}
                  alt={p.alt}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width:1024px) 50vw, 25vw"
                />
              </div>
              <div className="px-4 py-4">
                <h3 className="font-body text-sm font-semibold text-on-surface">
                  {p.name}
                </h3>
                <p className="mt-1 font-body text-sm text-primary">{p.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
