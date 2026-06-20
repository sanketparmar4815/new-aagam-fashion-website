 "use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { CheckCheck, ClipboardList, DraftingCompass, Ruler } from "lucide-react";

const detailedSteps = [
  {
    id: "dp-1",
    title: "Consultation",
    description:
      "Discuss your needs, style preferences, and fabric choices with our experts.",
    Icon: ClipboardList,
  },
  {
    id: "dp-2",
    title: "Measurement",
    description:
      "Over 30 precise anatomical data points captured for a perfect fit profile.",
    Icon: Ruler,
  },
  {
    id: "dp-3",
    title: "Crafting",
    description:
      "Your garment is sculpted by master tailors over several hours of hand-work.",
    Icon: DraftingCompass,
  },
  {
    id: "dp-4",
    title: "Final Fitting",
    description:
      "Minor adjustments ensure absolute perfection before you take it home.",
    Icon: CheckCheck,
  },
] as const;

export function TailoringProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const timer = window.setInterval(() => {
      setActiveStep((prev) => (prev + 1) % detailedSteps.length);
    }, 1400);
    return () => window.clearInterval(timer);
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      id="tailoring-process"
      className="bg-surface py-16 md:py-24"
      aria-labelledby="tailoring-heading"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="mt-16 md:mt-20">
          <header
            className={`mx-auto max-w-2xl text-center transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <h3
              id="tailoring-heading"
              className="font-display text-[2.2rem] font-medium tracking-tight text-primary md:text-[3rem]"
            >
              The Tailoring Process
            </h3>
            <p className="mt-2 font-body text-[1.05rem] text-on-surface/80">
              Four simple steps to your perfectly tailored garment.
            </p>
          </header>

          {/* Desktop animated flow (reference style) */}
          <div className="relative mt-12 hidden md:block">
            <div className="grid grid-cols-7 items-center gap-4">
              {detailedSteps.map((step, idx) => (
                <div key={step.id} className={cn("contents")}>
                  <div
                    className={cn(
                      "relative flex items-center justify-center transition-all duration-700",
                      isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                    )}
                    style={{ transitionDelay: `${120 + idx * 130}ms` }}
                  >
                    <span
                      className={cn(
                        "inline-flex h-[82px] w-[82px] items-center justify-center rounded-full bg-primary-container text-surface transition-all duration-500",
                        activeStep === idx
                          ? "scale-105 shadow-[0_0_0_8px_rgba(98,62,33,0.14),0_0_24px_rgba(98,62,33,0.35)]"
                          : "scale-100 shadow-ambient"
                      )}
                    >
                      <step.Icon className="h-8 w-8" strokeWidth={1.5} />
                    </span>
                  </div>

                  {idx < detailedSteps.length - 1 ? (
                    <div className="relative h-px overflow-hidden bg-on-surface/15">
                      <span
                        className="absolute inset-y-0 left-0 bg-primary-container/70 transition-transform duration-500"
                        style={{
                          width: "100%",
                          transform:
                            isVisible && activeStep > idx ? "scaleX(1)" : "scaleX(0)",
                          transformOrigin: "left",
                        }}
                      />
                    </div>
                  ) : null}
                </div>
              ))}
            </div>

            <ol className="mt-8 grid grid-cols-4 gap-4">
              {detailedSteps.map((step, idx) => (
                <li
                  key={`${step.id}-copy`}
                  className={cn(
                    "text-center transition-all duration-700",
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  )}
                  style={{ transitionDelay: `${220 + idx * 130}ms` }}
                >
                  <h4 className="font-display text-[1.9rem] text-on-surface md:text-[2.05rem]">
                    {step.title}
                  </h4>
                  <p className="mx-auto mt-3 max-w-[230px] font-body text-[0.98rem] leading-relaxed text-on-surface/75">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          {/* Mobile stack */}
          <ol className="mt-10 flex flex-col gap-10 md:hidden">
            {detailedSteps.map((step, idx) => (
              <li
                key={step.id}
                className={cn(
                  "relative z-10 flex flex-col items-center px-2 text-center transition-all duration-700",
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                )}
                style={{ transitionDelay: `${120 + idx * 120}ms` }}
              >
                <span
                  className={cn(
                    "mb-6 inline-flex h-[72px] w-[72px] items-center justify-center rounded-full bg-primary-container text-surface transition-all duration-500",
                    activeStep === idx
                      ? "scale-105 shadow-[0_0_0_8px_rgba(98,62,33,0.14),0_0_24px_rgba(98,62,33,0.35)]"
                      : "shadow-ambient"
                  )}
                >
                  <step.Icon className="h-7 w-7" strokeWidth={1.5} />
                </span>
                <h4 className="font-display text-[1.9rem] text-on-surface">{step.title}</h4>
                <p className="mt-3 max-w-[250px] font-body text-[0.98rem] leading-relaxed text-on-surface/75">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
