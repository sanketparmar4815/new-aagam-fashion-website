export interface ProductCard {
  id: string;
  name: string;
  price: string;
  image: string;
  alt: string;
  badge?: "NEW";
  href: string;
}

export const bestSellers: ProductCard[] = [
  {
    id: "bs-1",
    name: "Heritage Wool Suiting",
    price: "₹24,999",
    image:
      "https://images.unsplash.com/photo-1593030769557-5b5fe4d6b1c7?w=800&q=85",
    alt: "Navy tailored suit fabric drape",
    badge: "NEW",
    href: "#new-arrivals",
  },
  {
    id: "bs-2",
    name: "Italian Silk Swatch",
    price: "₹2,899 / m",
    image:
      "https://images.unsplash.com/photo-1558171813-3c8f40d1cb84?w=800&q=85",
    alt: "Golden luxury fabric texture",
    badge: "NEW",
    href: "#fabric-mastery",
  },
  {
    id: "bs-3",
    name: "Signature Evening Shirt",
    price: "₹4,499",
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=85",
    alt: "Patterned dress shirt",
    badge: "NEW",
    href: "#new-arrivals",
  },
];

export const newArrivals: ProductCard[] = [
  {
    id: "na-1",
    name: "Charcoal Two-Piece",
    price: "₹32,500",
    image:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=700&q=85",
    alt: "Suit on mannequin",
    href: "#new-arrivals",
  },
  {
    id: "na-2",
    name: "Oxford Shirt Set",
    price: "₹3,299",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=700&q=85",
    alt: "Man in tailored shirt",
    href: "#new-arrivals",
  },
  {
    id: "na-3",
    name: "Tapered Trousers",
    price: "₹5,750",
    image:
      "https://images.unsplash.com/photo-1473966968600-fa801869a0a4?w=700&q=85",
    alt: "Tailored trousers detail",
    href: "#new-arrivals",
  },
  {
    id: "na-4",
    name: "Waistcoat — Midnight",
    price: "₹8,900",
    image:
      "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=700&q=85",
    alt: "Waistcoat tailoring",
    href: "#new-arrivals",
  },
];
