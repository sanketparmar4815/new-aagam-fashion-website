import { instagramPosts } from "@/data/instagram";
import Image from "next/image";
import Link from "next/link";

export function InstagramSection() {
  return (
    <section
      id="instagram-feed"
      className="bg-surface-low py-20 md:py-24"
      aria-labelledby="instagram-heading"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <h2
            id="instagram-heading"
            className="font-display text-3xl font-medium tracking-tight text-on-surface md:text-4xl"
          >
            Instagram @aagamfashion
          </h2>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-primary px-8 py-3 font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary transition hover:bg-primary hover:text-surface"
          >
            Follow us
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {instagramPosts.map((post) => (
            <div
              key={post.id}
              className="relative aspect-square overflow-hidden rounded-card"
            >
              <Image
                src={post.src}
                alt={post.alt}
                fill
                className="object-cover transition duration-500 hover:scale-[1.04]"
                sizes="(max-width:768px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
