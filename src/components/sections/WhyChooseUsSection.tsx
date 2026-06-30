"use client";

import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const features = [
  {
    title: "Heritage Since 1992",
    description: "Over three decades of serving Surat with the finest fabrics and unwavering commitment to quality.",
    highlighted: true,
  },
  {
    title: "Premium Quality Fabrics",
    description: "Sourced from the world's finest mills, our fabrics reflect luxury, comfort, and sophistication.",
  },
  {
    title: "Expert Craftsmanship",
    description: "Every piece is crafted with meticulous attention to detail by our skilled artisans.",
  },
  {
    title: "8 Premium Showrooms",
    description: "Conveniently located across Surat for an exceptional in-store experience.",
  },
  {
    title: "Modern Aesthetics",
    description: "Timeless designs that perfectly blend traditional elegance with contemporary style.",
  },
  {
    title: "Customer First",
    description: "Dedicated to providing personalized service and building lasting relationships.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function WhyChooseUsSection() {
  return (
    <section className="bg-primary py-20 md:py-28 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <header className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl font-medium tracking-tight md:text-5xl"
          >
            Why Choose <span className="text-accent">AAGAM FASHION</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl font-body text-sm text-primary-foreground/75 md:text-base"
          >
            Experience the perfect blend of tradition, craftsmanship, and modern luxury
          </motion.p>
        </header>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className={cn(
                "rounded-2xl border bg-primary-container p-8 transition-all hover:shadow-ambient",
                feature.highlighted
                  ? "border-accent/40 shadow-[0_0_20px_rgba(255,225,123,0.15)]"
                  : "border-primary-foreground/10 hover:border-accent/30"
              )}
            >
              <div className="mb-6 inline-flex rounded-lg bg-accent p-3 text-accent-foreground shadow-md transition-transform hover:scale-110">
                <Sparkles className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <h3 className="mb-3 font-display text-xl font-semibold text-primary-foreground">
                {feature.title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-primary-foreground/70">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
