import {
  Star,
  Shield,
  BadgeCheck,
  Sparkles,
} from "lucide-react";

const features = [
  {
    id: 1,
    title: "Premium Quality",
    description: "Finest fabrics sourced from across the globe",
    icon: Star,
  },
  {
    id: 2,
    title: "Since 1992",
    description: "Over 30 years of trusted excellence",
    icon: Shield,
  },
  {
    id: 3,
    title: "Expert Craftsmanship",
    description: "Precision tailoring and attention to detail",
    icon: BadgeCheck,
  },
  {
    id: 4,
    title: "Affordable Luxury",
    description: "Premium quality at accessible prices",
    icon: Sparkles,
  },
];

export default function OurNumbersSection() {
  return (
    <section
      id="our-numbers"
      className="bg-surface py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10">

        {/* Heading */}
        <header className="mx-auto mb-14 max-w-2xl text-center">
          <h2 
        className="mt-5 text-center font-display text-3xl font-bold tracking-tight text-primary md:text-5xl"
        //   className="font-display text-3xl font-medium tracking-tight text-on-surface md:text-5xl "
        >
            Why Clients Choose Us
          </h2>
          <p className="mt-4 font-body text-sm leading-relaxed text-muted md:text-base">
            A commitment to craftsmanship, premium materials, and decades of tailoring expertise.
          </p>
        </header>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.id}
                className="
                  group relative overflow-hidden
                  rounded-card
                  border border-white/10
                  bg-surface-low/80
                  px-8 py-10
                  text-center
                  transition-all duration-500 ease-out

                  hover:-translate-y-3
                  hover:scale-[1.02]
                  hover:border-primary/30
                  hover:shadow-[0_25px_80px_rgba(0,0,0,0.35)]
                "
              >
                {/* ✨ Glow Layer (appears on hover) */}
                <div className="
                  absolute inset-0
                  bg-gradient-to-br from-primary/10 via-transparent to-transparent
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-500
                " />

                {/* ✨ Soft radial highlight */}
                <div className="
                  absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2
                  rounded-full bg-primary/10 blur-3xl
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-500
                " />

                {/* Icon */}
                <div className="
                  relative mx-auto mb-6 flex h-16 w-16 items-center justify-center
                  rounded-2xl bg-primary-container text-surface
                  shadow-md
                  transition-all duration-500
                  group-hover:shadow-lg
                  group-hover:scale-110
                ">
                  <Icon className="h-7 w-7" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="
                  relative font-display text-2xl text-on-surface
                ">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="
                  relative mt-4 font-body text-sm leading-relaxed text-muted
                ">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}