import Image from "next/image";

export function FabricMasterySection() {
  return (
    <section
      id="fabric-mastery"
      className="bg-surface-low py-20 md:py-28"
      aria-labelledby="fabric-heading"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <h2
          id="fabric-heading"
          className="mb-12 font-display text-3xl font-medium tracking-tight text-on-surface md:text-5xl"
        >
          Fabric mastery
        </h2>

        <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
          <div className="relative min-h-[420px] overflow-hidden rounded-card lg:col-span-5">
            <Image
              src="https://images.unsplash.com/photo-1558171813-3c8f40d1cb84?w=900&q=85"
              alt="Rich brown textured fabric"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-on-surface/55 to-transparent" />
            <p className="absolute bottom-6 left-6 max-w-xs font-display text-2xl text-surface md:text-3xl">
              Hand-selected fabrics
            </p>
          </div>

          <div className="flex flex-col gap-6 lg:col-span-7">
            <div className="relative min-h-[200px] flex-1 overflow-hidden rounded-card">
              <Image
                src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=900&q=85"
                alt="Draped fabric in motion"
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 55vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-on-surface/45 to-transparent" />
              <p className="absolute bottom-6 left-6 font-accent text-lg italic text-surface">
                Rich and soft textures
              </p>
            </div>
            <div className="relative min-h-[200px] flex-1 overflow-hidden rounded-card">
              <Image
                src="https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=900&q=85"
                alt="Folded neutral fabric"
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 55vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-on-surface/40 to-transparent" />
              <p className="absolute bottom-6 left-6 font-body text-sm font-medium uppercase tracking-[0.2em] text-surface">
                Calm neutrals · Occasion weaves
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
