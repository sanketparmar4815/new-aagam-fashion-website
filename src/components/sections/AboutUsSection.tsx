import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function AboutUsSection() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=1000&q=80",
      alt: "Tailoring details",
      widthClass: "lg:w-full lg:ml-0",
    },
    {
      src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1000&q=80",
      alt: "Bespoke suit styling",
      widthClass: "lg:w-[98%] lg:ml-[5%]",
    },
    {
      src: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=1000&q=80",
      alt: "Craftsmanship sewing work",
      widthClass: "lg:w-[96%] lg:ml-[10%]",
    },
    {
      src: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=1000&q=80",
      alt: "Premium luxury fabrics",
      widthClass: "lg:w-[94%] lg:ml-[15%]",
    },
  ];

  return (
    <section id="about-us" className="bg-surface overflow-visible py-20 lg:py-32">
      {/* Container split into 2 halves on lg screens, edge-to-edge */}
      <div className="relative grid grid-cols-1 lg:grid-cols-2">

        {/* Left Column: Sticky Content (pins on lg screens) */}
        <div className="lg:sticky lg:top-0 lg:h-screen flex items-center justify-center px-8 py-20 sm:px-12 md:px-16 lg:px-24 bg-surface">
          <div className="max-w-md">
            <ScrollReveal delay={100} offset={20}>
              <span className="font-body text-xs font-bold uppercase tracking-[0.25em] text-accent-muted">
                About Aagam Fashion
              </span>
            </ScrollReveal>

            <ScrollReveal delay={200} offset={25}>
              <h2 className="mt-4 font-display text-4xl font-medium leading-[1.15] tracking-tight text-primary md:text-5xl lg:text-[3.5rem]">
                Crafting Legacy in Every Stitch.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={300} offset={25}>
              <p className="mt-6 font-body text-sm leading-relaxed text-muted md:text-base">
                Welcome to Aagam Fashion, where heritage meets modern bespoke tailoring. For over three decades, we have been dedicated to providing the finest fabrics, designer wear, and personal styling services.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={400} offset={25}>
              <p className="mt-4 font-body text-sm leading-relaxed text-muted md:text-base">
                We believe that clothing is more than just fashion—it is an expression of identity, confidence, and precision. Our master tailors ensure that every cut, fold, and stitch is executed with absolute perfection, bringing your personal style vision to life.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={500} offset={20}>
              <div className="mt-8">
                <Link
                  href="/about/"
                  className="group relative inline-flex pb-1 font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary transition duration-300 hover:text-primary/80"
                >
                  Learn our story
                  <span className="absolute bottom-0 left-0 h-[2px] w-full bg-primary transition-transform duration-300 scale-x-100 group-hover:scale-x-110" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Right Column: Stacking Images (scrolls on desktop, normal column on mobile) */}
        <div className="relative lg:h-[400vh] w-full flex flex-col">
          {images.map((img, index) => (
            <div
              key={index}
              className={`
                w-full lg:sticky lg:top-0 lg:h-screen overflow-hidden transition-all duration-500
                ${img.widthClass}
                ${index > 0 ? "mt-4 lg:mt-0" : ""}
              `}
              style={{
                zIndex: (index + 1) * 10,
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-[50vh] sm:h-[60vh] lg:h-full object-cover"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
