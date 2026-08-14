import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { uiTestimonials } from "@/data/testimonials";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function TestimonialsSection() {
  const testimonials = uiTestimonials.map((testimonial) => ({
    text: testimonial.text,
    image: testimonial.image,
    name: testimonial.name,
    role: testimonial.username,
  }));
  const firstColumn = testimonials.slice(0, 3);
  const secondColumn = testimonials.slice(3, 6);
  const thirdColumn = testimonials.slice(6, 9);

  return (
    <section
      id="testimonials"
      className="relative bg-background py-20 md:py-28"
      aria-labelledby="testimonials-heading"
    >
      <div className="container z-10 mx-auto px-5 md:px-10">
        <ScrollReveal offset={24}>
          <div className="mx-auto flex max-w-[620px] flex-col items-center justify-center">
            <div className="flex justify-center">
              <div className="rounded-lg border border-border px-4 py-1 font-body text-sm text-muted-foreground">
                Testimonials
              </div>
            </div>

            <h2
              id="testimonials-heading"
              className="mt-5 text-center font-display text-3xl font-bold tracking-tight text-primary md:text-5xl"
            >
              Words from our happy customers
            </h2>
            <p className="mt-5 text-center font-body text-muted-primary">
              Stories from clients who trust Aagam Fashion for fabrics, fit, and
              bespoke tailoring.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-10 flex max-h-[740px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
}
