"use client";

import { motion, animate, useMotionValue, useTransform, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

function AnimatedCounter({ end, suffix = "" }: { end: number, suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      animate(count, end, { duration: 2.5, ease: "easeOut" });
    }
  }, [count, end, inView]);

  return (
    <span ref={ref} className="inline-flex items-center">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export function StatsCounterSection() {
  const stats = [
    { value: 8, suffix: "", label: "Branches in Surat" },
    { value: 30, suffix: "+", label: "Years of Service" },
    { value: 100, suffix: "%", label: "Quality Assurance" },
    { value: 250, suffix: "k+", label: "Happy Customers" },
  ];

  return (
    <section className="bg-primary pb-20 md:pb-28 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="flex flex-col items-center justify-center rounded-2xl border border-primary-foreground/10 bg-primary-container py-10 transition-colors hover:border-accent/30 hover:shadow-ambient"
            >
              <div className="mb-2 font-display text-4xl font-bold text-accent md:text-5xl">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="font-body text-xs text-primary-foreground/70 md:text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
