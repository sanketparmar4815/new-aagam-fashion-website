"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ────────────────────────────── Types ────────────────────────────── */

interface KeyFeature {
  label: string;
  iconName: string;
}

interface Fabric {
  id: string;
  name: string;
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  thumbnail: string;
  image: string;
  features: KeyFeature[];
}

/* ────────────────────────────── Data ────────────────────────────── */

const fabrics: Fabric[] = [
  {
    id: "giza",
    name: "Giza",
    title: "Giza Cotton",
    description:
      "Giza cotton is globally famous for its rare purity & exceptional softness. This Silk like cotton boasts a natural sheen, luxurious drape & durability because of its long fibres. These fibres are stronger, finer & longer than the regular cotton, resulting in a smoother, more breathable fabric. Giza cotton resists pilling & maintains its shape, drape & color despite repeated washes. Its silky texture ensures unmatched comfort, making it ideal for all day wear.",
    ctaText: "Explore Giza Collection",
    ctaHref: "/products?fabric=giza",
    thumbnail:
      "https://www.tradeuno.com/cdn/shop/files/DSC09798.jpg?v=1781207380&width=1946",
    image:
      "https://www.tradeuno.com/cdn/shop/files/DSC09798.jpg?v=1781207380&width=1946",
    features: [
      { label: "Pure Cotton", iconName: "cotton-boll" },
      { label: "Durable", iconName: "shield" },
      { label: "Breathable", iconName: "breathable-hand" },
      { label: "Natural Sheen", iconName: "natural-sheen" },
      { label: "Super Soft", iconName: "super-soft" },
      { label: "Satin Weave", iconName: "textured-fabric" },
    ],
  },
  {
    id: "linen",
    name: "Linen",
    title: "Cotton Linen",
    description:
      "Made from nature's finest fibres, this blend offers the best of both worlds, linen's breathability and cotton's softness. The lightweight weave allows your skin to breathe, making it perfect for tropical days and cool evenings. This fabric regulates temperature naturally. Enhanced durability ensures it ages beautifully with each wear. With excellent moisture-wicking and minimal static, it is ideal for all-day comfort. Durable and biodegradable, this fabric embraces slow fashion.",
    ctaText: "Explore Linen Collection",
    ctaHref: "/products?fabric=linen",
    thumbnail:
      "https://image.made-in-china.com/202f0j00LRBfPcVWVQgk/High-Quality-Linen-Fabric.webp",
    image:
      "https://image.made-in-china.com/202f0j00LRBfPcVWVQgk/High-Quality-Linen-Fabric.webp",
    features: [
      { label: "Cotton Linen Blend", iconName: "hemp-blend" },
      { label: "Antibacterial", iconName: "antibacterial" },
      { label: "Thermo Control", iconName: "thermo-control" },
      { label: "Breathable", iconName: "breathable-hand" },
      { label: "No Pilling", iconName: "no-pilling" },
      { label: "Quick Dry", iconName: "quick-dry" },
    ],
  },
  {
    id: "2ply",
    name: "2 Ply",
    title: "2 Ply Cotton",
    description:
      "2-ply cotton is the epitome of luxury shirting, a fabric woven not from single strands, but from two individual yarns twisted together before weaving. This results in a fabric that is stronger, smoother, and more resilient, offering a superior feel and finish. The result is a crisp, long-lasting fabric that feels incredibly soft and holds its shape beautifully.",
    ctaText: "Explore 2 Ply Collection",
    ctaHref: "/products?fabric=2ply",
    thumbnail:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=120&h=120&q=80",
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80",
    features: [
      { label: "Pure Cotton", iconName: "cotton-boll" },
      { label: "2 Ply Cotton", iconName: "2ply-yarn" },
      { label: "Durable", iconName: "shield" },
      { label: "Breathable", iconName: "breathable-hand" },
      { label: "Natural Sheen", iconName: "natural-sheen" },
      { label: "Fade Resistant", iconName: "fade-resistant" },
    ],
  },
  {
    id: "oxford",
    name: "Oxford",
    title: "Cotton Oxford",
    description:
      "A timeless classic, Cotton Oxford strikes the perfect balance between durability and sophistication. Woven using a unique basket weave structure, Oxford fabric offers a distinctive texture and subtle sheen. Traditionally made from 100% cotton, this fabric is prized for its breathability, strength, and naturally soft hand feel.",
    ctaText: "Explore Oxford Collection",
    ctaHref: "/products?fabric=oxford",
    thumbnail:
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=120&h=120&q=80",
    image:
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=800&q=80",
    features: [
      { label: "Pure Cotton", iconName: "cotton-boll" },
      { label: "Yarn Dyed", iconName: "yarn-dyed" },
      { label: "Durable", iconName: "shield" },
      { label: "Breathable", iconName: "breathable-hand" },
      { label: "Bio Washed", iconName: "bio-washed" },
      { label: "Textured Fabric", iconName: "textured-fabric" },
    ],
  },
  {
    id: "purelinen",
    name: "Pure Linen",
    title: "Pure Linen",
    description:
      "Crafted from 100% flax fibre, Pure Linen fabric is nature's finest answer to summer dressing. Exceptionally breathable, it allows air to flow freely, keeping the body cool in warm, humid climates. Linen is naturally moisture-wicking and quick-drying, ensuring lasting freshness all day. Its crisp texture resists clinging, making it ideal for tropical ease. Antibacterial and hypoallergenic by nature, it's gentle even on sensitive skin. Despite its light weight, linen is remarkably strong and durable, softening beautifully with every wash. The fabric softens beautifully over time, gaining character without losing strength. .Sustainably grown and biodegradable, it's as kind to the earth as it is to your skin. A timeless essential for those who prefer effortless luxury.",
    ctaText: "Explore Linen Collection",
    ctaHref: "/products?fabric=purelinen",
    thumbnail:
      "https://image.made-in-china.com/202f0j00LRBfPcVWVQgk/High-Quality-Linen-Fabric.webp",
    image:
      "https://image.made-in-china.com/202f0j00LRBfPcVWVQgk/High-Quality-Linen-Fabric.webp",
    features: [
      { label: "Pure Linen", iconName: "pure-linen-flower" },
      { label: "Antibacterial", iconName: "antibacterial" },
      { label: "Thermo Control", iconName: "thermo-control" },
      { label: "No Pilling", iconName: "no-pilling" },
      { label: "Quick Dry", iconName: "quick-dry" },
      { label: "Breathable", iconName: "breathable-hand" },
    ],
  },
  {
    id: "herringbone",
    name: "Herringbone",
    title: "Herringbone",
    description:
      "Herringbone is a distinguished weave pattern which features a zigzag or V-shaped visual Herringbone is a type of twill weave, but what sets it apart is how the diagonal lines reverse direction at regular intervals, creating a mirrored \"V\" or \"chevron\" effect. This intricate pattern is not just decorative, it also contributes to the fabric's overall strength and stability. herringbone fabric has a subtle two-tone appearance, giving it visual movement and richness without being loud.",
    ctaText: "Explore Herringbone Collection",
    ctaHref: "/products?fabric=herringbone",
    thumbnail:
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=120&h=120&q=80",
    image:
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
    features: [
      { label: "Yarn Dyed", iconName: "yarn-dyed" },
      { label: "2 Ply Cotton", iconName: "2ply-yarn" },
      { label: "Natural Sheen", iconName: "natural-sheen" },
      { label: "Textured Fabric", iconName: "textured-fabric" },
      { label: "Fade Resistant", iconName: "fade-resistant" },
      { label: "Breathable", iconName: "breathable-hand" },
    ],
  },
  {
    id: "corduroy",
    name: "Corduroy",
    title: "Corduroy",
    description:
      "Cotton corduroy is woven from soft yet durable cotton yarns, then meticulously cut along its vertical ridges, known as wales, to create a plush, velvety texture. These signature stripes aren't just tactile, they're a mark of craftsmanship. Depending on their density, corduroy ranges from the fine pinwale (ideal for refined shirting) to broader wide wale or bedford cord, each adding depth and richness to the fabric's surface. Naturally breathable and surprisingly sturdy, this mid-weight textile blends warmth with elegance, making it a versatile all season wear",
    ctaText: "Explore Corduroy Collection",
    ctaHref: "/products?fabric=corduroy",
    thumbnail:
      "https://m.media-amazon.com/images/I/71un9qINw5L._AC_UF1000,1000_QL80_.jpg",
    image:
      "https://m.media-amazon.com/images/I/71un9qINw5L._AC_UF1000,1000_QL80_.jpg",
    features: [
      { label: "Pure Cotton", iconName: "cotton-boll" },
      { label: "Durable", iconName: "shield" },
      { label: "Comfortable", iconName: "comfortable" },
      { label: "Breathable", iconName: "breathable-hand" },
      { label: "Bio Washed", iconName: "bio-washed" },
      { label: "Velvety Texture", iconName: "velvety-texture" },
    ],
  },
  {
    id: "hemp",
    name: "Hemp",
    title: "Hemp Fabric",
    description:
      "Rooted in nature, grown with little water and zero pesticides, hemp is one of the most eco-friendly fibres on the planet. Blending raw charm with surprising softness, it feels breathable, airy, and kind to skin. Its high tensile strength ensures lasting wear, while its unique texture adds character to every shirt. We have crafted a fusion of Hemp & Tencel fibres to create a fine sustainable blended fabric. Crafted from the sustainable strength of hemp and the silky finesse of Tencel, this fabric offers the best of both worlds. Hemp lends durability, breathability, and a naturally textured hand feel, while Tencel, made from eucalyptus pulp, brings unmatched softness, fluid drape, and a subtle sheen.",
    ctaText: "Explore Hemp Collection",
    ctaHref: "/products?fabric=hemp",
    thumbnail:
      "https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=120&h=120&q=80",
    image:
      "https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=800&q=80",
    features: [
      { label: "Hemp Lyocell Blend", iconName: "hemp-blend" },
      { label: "Super Soft", iconName: "super-soft" },
      { label: "Antibacterial", iconName: "antibacterial" },
      { label: "UV Protection", iconName: "uv-protection" },
      { label: "Thermo Control", iconName: "thermo-control" },
      { label: "Moisture Wicking", iconName: "moisture-wicking" },
    ],
  },
];

/* ────────────────────────────── Icons ────────────────────────────── */

function FeatureIcon({ name }: { name: string }) {
  const css = "w-5 h-5 text-[#c5a059]";
  const sw = "1.3";
  switch (name) {
    case "pure-linen-flower":
      return (
        <svg className={css} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="2.2" />
          <path d="M12 2.5a3 3 0 0 0-3 3c0 2 1.5 3.5 3 4.5 1.5-1 3-2.5 3-4.5a3 3 0 0 0-3-3z" />
          <path d="M12 21.5a3 3 0 0 0 3-3c0-2-1.5-3.5-3-4.5-1.5 1-3 2.5-3 4.5a3 3 0 0 0 3 3z" />
          <path d="M3.77 7.23a3 3 0 0 0 1.1 4.1c1.73 1 3.65.6 5.06-.5-1.2-1.3-2.2-3.1-1.9-4.7a3 3 0 0 0-4.26 1.1z" />
          <path d="M20.23 16.77a3 3 0 0 0-1.1-4.1c-1.73-1-3.65-.6-5.06.5 1.2 1.3 2.2 3.1 1.9 4.7a3 3 0 0 0 4.26-1.1z" />
          <path d="M3.77 16.77a3 3 0 0 0 4.26 1.1c.3-1.6-.7-3.4-1.9-4.7-1.41 1.1-3.33 1.5-5.06.5a3 3 0 0 0-1.1 4.1z" />
          <path d="M20.23 7.23a3 3 0 0 0-4.26-1.1c-.3 1.6.7 3.4 1.9 4.7 1.41-1.1 3.33-1.5 5.06-.5a3 3 0 0 0 1.1-4.1z" />
        </svg>
      );
    case "antibacterial":
      return (
        <svg className={css} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polygon points="12 8 13.5 10.5 16 12 13.5 13.5 12 16 10.5 13.5 8 12 10.5 10.5 12 8" />
        </svg>
      );
    case "thermo-control":
      return (
        <svg className={css} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 5c-2.5 2-2.5 5 0 7s2.5 5 0 7" />
          <path d="M16 5c2.5 2 2.5 5 0 7s-2.5 5 0 7" />
          <circle cx="8" cy="4" r="0.75" fill="currentColor" />
          <circle cx="16" cy="4" r="0.75" fill="currentColor" />
          <path d="M12 8v8" />
        </svg>
      );
    case "no-pilling":
      return (
        <svg className={css} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <line x1="5.7" y1="5.7" x2="18.3" y2="18.3" />
          <path d="M9 12a3 3 0 0 1 6 0" />
        </svg>
      );
    case "quick-dry":
      return (
        <svg className={css} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 21a5 5 0 0 0 5-5c0-3-5-7.5-5-7.5s-5 4.5-5 7.5a5 5 0 0 0 5 5z" />
          <path d="M12 3v3" />
          <path d="M7.5 5l1.5 2" />
          <path d="M16.5 5l-1.5 2" />
        </svg>
      );
    case "breathable-hand":
      return (
        <svg className={css} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 9c-1.5 0-3-1-4.5-1S10.5 9 9 9s-3-1-4.5-1" />
          <path d="M19 5c-1.5 0-3-1-4.5-1S11.5 5 10 5s-3-1-4.5-1" />
          <path d="M5 16h5a2 2 0 0 0 2-2v-1a1 1 0 0 1 2 0v2a2 2 0 0 0 2 2h3" />
          <path d="M5 19.5h14" />
        </svg>
      );
    case "yarn-dyed":
      return (
        <svg className={css} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 4a3.5 3.5 0 0 0-3.5 3.5c0 1.3.7 2.4 1.7 3A3.5 3.5 0 0 0 7 14a3.5 3.5 0 0 0 5 3.1A3.5 3.5 0 0 0 17 14a3.5 3.5 0 0 0-3.2-3.5c1-.6 1.7-1.7 1.7-3A3.5 3.5 0 0 0 12 4z" />
          <path d="M12 17.5V21" />
        </svg>
      );
    case "2ply-yarn":
      return (
        <svg className={css} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 12c3-4 6-4 9 0s6 4 9 0" />
          <path d="M3 12c3 4 6 4 9 0s6-4 9 0" />
          <circle cx="12" cy="12" r="1.5" />
          <circle cx="21" cy="12" r="1" />
          <circle cx="3" cy="12" r="1" />
        </svg>
      );
    case "natural-sheen":
      return (
        <svg className={css} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 16c2 3 10 3 12 0" />
          <path d="M12 4v4" />
          <path d="M6 7.5l2.5 2.5" />
          <path d="M18 7.5l-2.5 2.5" />
          <circle cx="12" cy="13" r="1" fill="currentColor" />
        </svg>
      );
    case "textured-fabric":
      return (
        <svg className={css} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M7 8l5 4-5 4" />
          <path d="M12 8l5 4-5 4" />
        </svg>
      );
    case "fade-resistant":
      return (
        <svg className={css} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
          <line x1="3" y1="21" x2="21" y2="3" />
        </svg>
      );
    case "cotton-boll":
      return (
        <svg className={css} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 4a3.5 3.5 0 0 0-3.5 3.5c0 .4.1.8.2 1.2A3.5 3.5 0 0 0 5 12a3.5 3.5 0 0 0 3.8 3.5 3.5 3.5 0 0 0 6.4 0A3.5 3.5 0 0 0 19 12a3.5 3.5 0 0 0-3.7-3.3c.1-.4.2-.8.2-1.2A3.5 3.5 0 0 0 12 4z" />
          <path d="M12 15.5V21" />
          <path d="M9 18c1.5 1 4.5 1 6 0" />
        </svg>
      );
    case "shield":
      return (
        <svg className={css} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "comfortable":
      return (
        <svg className={css} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L3.5 12.5a3.5 3.5 0 0 0 4.95 4.95l8.49-8.49a1.5 1.5 0 0 1 2.12 2.12l-7.78 7.78" />
          <path d="M16 8L8 16" />
        </svg>
      );
    case "bio-washed":
      return (
        <svg className={css} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.4 19 2c1 2 2 4.1 2 7a9 9 0 0 1-10 11z" />
          <path d="M7 16a3 3 0 0 0 3-3c0-2-3-5-3-5s-3 3-3 5a3 3 0 0 0 3 3z" />
        </svg>
      );
    case "velvety-texture":
      return (
        <svg className={css} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="7" y1="3" x2="7" y2="21" />
          <line x1="11" y1="3" x2="11" y2="21" />
          <line x1="15" y1="3" x2="15" y2="21" />
          <line x1="19" y1="3" x2="19" y2="21" />
        </svg>
      );
    case "hemp-blend":
      return (
        <svg className={css} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2c0 4-3 7-3 10 0 3 3 5 3 10" />
          <path d="M12 12c-3-2-6-2-8 0 2 2 4 4 8 0" />
          <path d="M12 12c3-2 6-2 8 0-2 2-4 4-8 0" />
          <path d="M12 7c-2-3-5-4-7-3 1 3 3 5 7 3" />
          <path d="M12 7c2-3 5-4 7-3-1 3-3 5-7 3" />
        </svg>
      );
    case "super-soft":
      return (
        <svg className={css} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 6h16a2 2 0 0 1 0 4H4a2 2 0 0 1 0-4z" />
          <path d="M4 11h16a2 2 0 0 1 0 4H4a2 2 0 0 1 0-4z" />
          <path d="M4 16h16a2 2 0 0 1 0 4H4a2 2 0 0 1 0-4z" />
        </svg>
      );
    case "uv-protection":
      return (
        <svg className={css} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
          <path d="M12 17s4-2 4-5V8l-4-1.5L8 8v4c0 3 4 5 4 5z" />
        </svg>
      );
    case "moisture-wicking":
      return (
        <svg className={css} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 14h16M4 18h16" />
          <path d="M7 11v10M12 11v10M17 11v10" />
          <path d="M8 5a2 2 0 0 0 2-2c0-1.5-2-3-2-3s-2 1.5-2 3a2 2 0 0 0 2 2z" />
          <path d="M16 6a2 2 0 0 0 2-2c0-1.5-2-3-2-3s-2 1.5-2 3a2 2 0 0 0 2 2z" />
        </svg>
      );
    default:
      return (
        <svg className={css} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
}

/* ──────────────── Content pane (shared between static & animated) ──────────────── */

function FabricContent({ fabric }: { fabric: Fabric }) {
  return (
    <>
      {/* Text Content Block */}
      <div className="md:col-span-7 flex flex-col justify-between">
        <div>
          <h3 className="font-display text-4xl text-primary font-medium mb-6 leading-tight">
            {fabric.title}
          </h3>
          <p className="font-body text-sm leading-relaxed text-muted mb-8 text-justify">
            {fabric.description}
          </p>
        </div>
        <div>
          <a
            href={fabric.ctaHref}
            className="inline-block bg-[#fffcf8] border border-accent-muted text-primary hover:bg-primary hover:text-white hover:border-primary font-body text-xs font-bold uppercase tracking-[0.2em] px-8 py-4 rounded-md transition-all duration-300 transform hover:-translate-y-0.5 text-center"
          >
            {fabric.ctaText}
          </a>
        </div>
      </div>

      {/* Big Image Display */}
      <div className="md:col-span-5 relative aspect-square w-full">
        <div className="w-full h-full rounded-[24px] overflow-hidden shadow-[0_12px_30px_rgba(30,28,16,0.08)] border border-white">
          <img
            src={fabric.image}
            alt={fabric.title}
            className="w-full h-full object-cover transform hover:scale-[1.04] transition-transform duration-700 ease-out"
          />
        </div>
      </div>

      {/* Key Features Block */}
      <div className="md:col-span-12 mt-4 lg:mt-8">
        <span className="font-body text-xs font-bold uppercase tracking-[0.25em] text-accent-muted block mb-5">
          Key Features
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {fabric.features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white border border-border/30 rounded-xl px-5 py-4 flex items-center gap-3.5 shadow-[0_4px_12px_rgba(30,28,16,0.02)] transition-colors duration-300 hover:border-accent-muted/40"
            >
              <div className="flex-shrink-0">
                <FeatureIcon name={feature.iconName} />
              </div>
              <span className="font-body text-xs font-semibold text-primary tracking-wide">
                {feature.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

/* ────────────────────────────── Main Component ────────────────────────────── */

export function FabricSection() {
  const [activeTab, setActiveTab] = useState<string>("giza");
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const activeFabric =
    fabrics.find((f) => f.id === activeTab) || fabrics[0];

  return (
    <section
      id="fabric-library"
      className="bg-[#fcf8f2] py-20 md:py-28 text-on-surface border-y border-border/30 overflow-hidden"
      aria-labelledby="fabric-library-heading"
    >
      {/* Maximum width adjusted from max-w-7xl to max-w-[1440px] for spacious wide layouts */}
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <h2
            id="fabric-library-heading"
            className="font-display text-4xl font-bold tracking-tight text-primary md:text-5xl uppercase"
          >
            THE FABRIC LIBRARY
          </h2>
          <p className="mt-4 font-body text-sm leading-relaxed text-muted md:text-base">
            Discover the craftsmanship behind every thread. Each fabric
            tells a story of heritage, comfort, and timeless style.
          </p>
        </header>

        {/* Outer Container Grid utilizing the full spacious width */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch bg-white border border-border/20 rounded-3xl p-6 md:p-8 lg:p-10 shadow-sm relative">
          
          {/* ── Left: Sidebar Tabs Container with separate background area ── */}
          <div className="lg:col-span-3 bg-card rounded-2xl border border-border/20 p-4 lg:p-5 flex lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-5 scrollbar-none snap-x snap-mandatory shadow-[0_4px_12px_rgba(72,40,13,0.02)]">
            <span className="hidden lg:block font-body text-[10px] font-bold uppercase tracking-[0.25em] text-accent-muted border-b border-border/10 pb-2 mb-2">
              Collections
            </span>
            <div className="flex lg:flex-col gap-3 w-full">
              {fabrics.map((fabric) => {
                const isActive = fabric.id === activeTab;
                return (
                  <button
                    key={fabric.id}
                    type="button"
                    onClick={() => setActiveTab(fabric.id)}
                    className={`
                      group relative flex items-center gap-4 p-3.5 rounded-xl border text-left
                      transition-all duration-300 w-full flex-shrink-0 lg:flex-shrink
                      snap-start cursor-pointer overflow-hidden
                      ${
                        isActive
                          ? "bg-[#fffcf8] border-accent-muted text-primary shadow-[0_4px_12px_rgba(72,40,13,0.04)] font-semibold scale-[1.02]"
                          : "bg-white border-border/40 hover:border-accent-muted/30 text-muted-foreground hover:bg-[#fffcf8] hover:text-primary hover:translate-x-1"
                      }
                    `}
                    style={{ minWidth: 160 }}
                  >
                    {/* Catchy slide-up overlay for inactive button states */}
                    {!isActive && (
                      <span className="absolute inset-0 bg-[#faf3e0]/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
                    )}

                    <div className="relative z-10 flex items-center gap-4 w-full">
                      <div className={`relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-surface-low transition-all duration-300
                        ${isActive ? "border-2 border-accent-muted scale-105" : "border border-border/10 group-hover:scale-105"}
                      `}>
                        <img
                          src={fabric.thumbnail}
                          alt={fabric.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="font-body text-sm font-semibold tracking-wide flex-grow">
                        {fabric.name}
                      </span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-accent-muted ml-auto block flex-shrink-0 animate-pulse" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── Desktop Separator Line Centered in the Gap (re-calculated for 25% + 20px) ── */}
          <div className="hidden lg:block absolute top-14 bottom-14 left-[calc(25%+20px)] w-[1px] bg-border/30" />

          {/* ── Right: Content Pane Container (fully utilizes 9 columns for spacious width) ── */}
          <div className="lg:col-span-9 min-h-[400px]">
            {hasMounted ? (
              /* ── After hydration: Framer Motion animated transitions ── */
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFabric.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12"
                >
                  <FabricContent fabric={activeFabric} />
                </motion.div>
              </AnimatePresence>
            ) : (
              /* ── During SSR / before hydration: static HTML (no motion) ── */
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
                <FabricContent fabric={activeFabric} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
