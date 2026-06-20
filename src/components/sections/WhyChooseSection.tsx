import { whyChooseItems } from "@/data/whyChoose";
import { Sparkles } from "lucide-react";

export function WhyChooseSection() {
  return (
    <section
      id="why-choose"
      className="bg-surface py-20 md:py-28"
      aria-labelledby="why-heading"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <header className="mx-auto mb-14 max-w-2xl text-center">
          <h2
            id="why-heading"
            className="font-display text-3xl font-medium tracking-tight text-on-surface md:text-5xl"
          >
            Why choose Aagam Fashion
          </h2>
          <p className="mt-4 font-body text-sm leading-relaxed text-muted md:text-base">
            A calm, confident partner for wardrobes, events, and fabric programs alike.
          </p>
        </header>

        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseItems.map((item) => (
            <li
              key={item.id}
              className="flex gap-4 rounded-card bg-surface-low/60 p-6 transition hover:bg-surface-high"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-container text-surface">
                <Sparkles className="h-5 w-5" strokeWidth={1.25} />
              </span>
              <div>
                <h3 className="font-display text-xl text-on-surface">{item.title}</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
