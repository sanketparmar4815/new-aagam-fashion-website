export interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  category: string;
  isFeatured?: boolean;
}

export const productCategories = [
  "All",
  "Fabrics",
  "Kurtas",
  "Suits & Safaris",
  "Imported Pants",
  "Linen Shirts",
  "Imported Shirts",
  "Linen Trousers",
  "Tery Wool Suiting",
  "Jackets",
  "Indo Western",
  "Linen Pant Kati Shirt"
];

export const allProducts: Product[] = [
  {
    id: "p-1",
    title: "Premium Fabric",
    description: "Premium fabrics curated for bespoke tailoring",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=900&q=85",
    alt: "Fabric rolls in studio",
    category: "Fabrics",
    isFeatured: true,
  },
  {
    id: "p-2",
    title: "Linen Cotton Kurta",
    description: "Hand crafted cotton kurta with intricate embroidery",
    image: "https://images.unsplash.com/photo-1594938298596-eb5fd5ceb4b8?w=900&q=85",
    alt: "Man wearing kurta",
    category: "Kurtas",
    isFeatured: true,
  },
  {
    id: "p-3",
    title: "Classic Safari Suit",
    description: "Comfortable safari suit for all occasions",
    image: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=900&q=85",
    alt: "Safari suit",
    category: "Suits & Safaris",
  },
  {
    id: "p-4",
    title: "Premium Silk Fabric",
    description: "Pure silk fabric in various colors",
    image: "https://images.unsplash.com/photo-1558171813-1c0887535cc1?w=900&q=85",
    alt: "Silk fabric",
    category: "Fabrics",
  },
  {
    id: "p-5",
    title: "Imported Pants — Classic Fit",
    description: "Premium imported trousers with refined tailoring",
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=900&q=85",
    alt: "Classic fit pants",
    category: "Imported Pants",
    isFeatured: true,
  },
  {
    id: "p-6",
    title: "Imported Pants — Slim Fit",
    description: "Elegant slim fit trousers for modern styling",
    image: "https://images.unsplash.com/photo-1601633513364-77a83d7221e7?w=900&q=85",
    alt: "Slim fit pants",
    category: "Imported Pants",
  },
  {
    id: "p-7",
    title: "Imported Pants — Black",
    description: "Classic black imported trousers with refined tailoring",
    image: "https://images.unsplash.com/photo-1548883354-94bcfe321cfa?w=900&q=85",
    alt: "Black pants",
    category: "Imported Pants",
  },
  {
    id: "p-8",
    title: "Imported Pants — Charcoal",
    description: "Charcoal grey imported trousers with crisp silhouette",
    image: "https://images.unsplash.com/photo-1594938328870-962315978c4b?w=900&q=85",
    alt: "Charcoal pants",
    category: "Imported Pants",
  },
  {
    id: "p-9",
    title: "Imported Pants — Medium Grey",
    description: "Medium grey imported trousers with versatile styling",
    image: "https://images.unsplash.com/photo-1584865288642-42078afe6942?w=900&q=85",
    alt: "Medium grey pants",
    category: "Imported Pants",
  },
  {
    id: "p-10",
    title: "Linen Kurta — Sand",
    description: "Breathable linen kurta ideal for warm climates",
    image: "https://images.unsplash.com/photo-1595341596012-004543b59938?w=900&q=85",
    alt: "Sand linen kurta",
    category: "Kurtas",
  },
  {
    id: "p-11",
    title: "Linen Kurta — Ivory",
    description: "Minimal design with luxurious linen texture",
    image: "https://images.unsplash.com/photo-1508216182181-e23a3be373b5?w=900&q=85",
    alt: "Ivory linen kurta",
    category: "Kurtas",
  },
  {
    id: "p-12",
    title: "Linen Shirt — Beige Striped",
    description: "Lightweight beige striped linen for everyday elegance",
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=900&q=85",
    alt: "Beige striped shirt",
    category: "Linen Shirts",
    isFeatured: true,
  },
];
