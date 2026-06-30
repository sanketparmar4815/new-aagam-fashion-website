import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { allProducts } from "@/data/allProducts";
import { ProductCard } from "./ProductsPageSection";

export function HomeProductGridSection() {
  const products = allProducts.slice(0, 12);

  return (
    <section className="bg-background py-20 md:py-28 text-primary-foreground min-h-screen">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <header className="mb-12 text-center">
          <h2 className="font-display text-4xl font-medium tracking-tight text-primary md:text-5xl lg:text-6xl mb-4">
            Featured Collection
          </h2>
          <p className="mx-auto max-w-2xl font-body text-sm text-primary-foreground/80 md:text-base">
            Discover our handpicked selection of premium fabrics and ethnic wear, crafted to perfection for the discerning gentleman.
          </p>
        </header>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-16">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Products Button */}
        <div className="flex justify-center">
          <Link
            href="/products"
            className="group flex items-center gap-2 rounded-md bg-accent px-8 py-3 text-sm font-bold text-primary shadow-md transition-all hover:bg-accent/90 hover:scale-105"
          >
            View All Products
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
          </Link>
        </div>
      </div>
    </section>
  );
}
