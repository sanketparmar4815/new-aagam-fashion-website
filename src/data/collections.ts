export interface FeaturedSlide {
  id: string;
  eyebrow: string;
  title: string;
  image: string;
  alt: string;
  href: string;
}

export const featuredCollectionSlides: FeaturedSlide[] = [
  {
    id: "fc-1",
    eyebrow: "Premium line",
    title: "Atelier Capsule",
    image:
      "https://images.unsplash.com/photo-1558171813-3c8f40d1cb84?w=900&q=85",
    alt: "Premium fabric folds",
    href: "#featured-collection",
  },
  {
    id: "fc-2",
    eyebrow: "Exclusives",
    title: "Midnight Tailoring",
    image:
      "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=900&q=85",
    alt: "Dark tailored jacket",
    href: "#featured-collection",
  },
  {
    id: "fc-3",
    eyebrow: "Limited",
    title: "Heritage Weave",
    image:
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=900&q=85",
    alt: "Fabric rolls in studio",
    href: "#featured-collection",
  },
];
