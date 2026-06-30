"use client";

import { useState } from "react";
import Image from "next/image";
import { allProducts, productCategories, Product } from "@/data/allProducts";
import { cn } from "@/lib/utils";

export function ProductCard({ product }: { product: Product }) {
  const whatsappMsg = `Hi Aagam Fashion, I am very interested in your luxury "${product.title}" from your Opulence Collection. Could you please share more details regarding fabric availability and custom tailoring options?`;
  const whatsappUrl = `https://api.whatsapp.com/send/?phone=7600050236&text=${encodeURIComponent(whatsappMsg)}&type=phone_number&app_absent=0`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-xl border border-accent/40 bg-primary-container transition-all duration-300 hover:border-accent hover:shadow-ambient hover:-translate-y-1"
    >
      <div className="relative aspect-[4/5] w-full bg-surface-low overflow-hidden">
        <Image
          src={product.image}
          alt={product.alt}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
          sizes="(max-width:768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        
        {product.isFeatured && (
          <div className="absolute right-4 top-4 rounded-full bg-accent px-4 py-1.5 text-xs font-bold text-accent-foreground shadow-md">
            Featured
          </div>
        )}
      </div>
      <div className="relative flex flex-col border-t border-accent/20 bg-primary-container p-5 min-h-[140px]">
        <div className="flex-1 transition-transform duration-300 group-hover:-translate-y-full opacity-100 group-hover:opacity-0">
          <p className="font-body text-lg font-semibold text-primary-foreground line-clamp-1">{product.title}</p>
          <p className="font-body text-sm text-primary-foreground/70 mt-1 line-clamp-2">{product.description}</p>
          <div className="mt-3 inline-block rounded-full border border-accent/50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-accent">
            {product.category}
          </div>
        </div>
        
        {/* Hover State Button */}
        <div className="absolute inset-x-5 bottom-5 flex items-center justify-center transition-transform duration-300 translate-y-[150%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="w-full rounded-md bg-accent py-2.5 text-center text-sm font-bold text-accent-foreground shadow-md transition-colors hover:bg-accent/90">
            Know More
          </span>
        </div>
      </div>
    </a>
  );
}

export function ProductsPageSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All" 
    ? allProducts 
    : allProducts.filter(p => p.category === activeCategory);

  return (
    <section className="bg-surface py-20 md:py-28 text-primary-foreground min-h-screen">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <header className="mb-12 text-center">
          <h1 className="font-display text-4xl font-medium tracking-tight text-primary md:text-5xl lg:text-6xl mb-4">
            Our Collection
          </h1>
          <p className="mx-auto max-w-2xl font-body text-sm text-primary-foreground/80 md:text-base">
            Browse through our exquisite collection of premium fabrics and ethnic wear for men. Each piece is crafted with precision and care.
          </p>
        </header>

        {/* Filters */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
          {productCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors md:text-sm",
                activeCategory === category
                  ? "border-accent bg-accent text-primary"
                  : "border-accent/40 bg-primary text-primary-foreground hover:border-accent"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-primary-foreground/60">
            <p>No products found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
