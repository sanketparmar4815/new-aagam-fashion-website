import type { UiTestimonial } from "@/components/ui/testimonials";

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  image: string;
  alt: string;
  rating: 5;
  username?: string;
  social?: string;
}

export const featuredTestimonial: Testimonial = {
  id: "t-1",
  quote:
    "Aagam understood the drape I wanted for my reception ensemble — the fabric felt alive, and the tailoring was flawless.",
  name: "Arjun Mehta",
  role: "Bespoke client · Mumbai",
  username: "@arjunmehta",
  social: "https://twitter.com",
  image:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=85",
  alt: "Portrait of a happy customer",
  rating: 5,
};

export const testimonialList: Testimonial[] = [
  {
    id: "t-2",
    quote:
      "From consultation to final delivery, the team was precise and deeply attentive. The fit was impeccable.",
    name: "Rahul Sharma",
    role: "Corporate client · Pune",
    username: "@rahulsharma",
    social: "https://twitter.com",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=85",
    alt: "Portrait of Rahul Sharma",
    rating: 5,
  },
  {
    id: "t-3",
    quote:
      "We placed a bulk fabric order for our studio and received exceptional quality with on-time delivery.",
    name: "Meera Khanna",
    role: "Boutique owner · Surat",
    username: "@meerakhanna",
    social: "https://twitter.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=85",
    alt: "Portrait of Meera Khanna",
    rating: 5,
  },
  {
    id: "t-4",
    quote:
      "My wedding outfit felt luxurious and perfectly tailored. Aagam delivered exactly what they promised.",
    name: "Aisha Patel",
    role: "Wedding client · Ahmedabad",
    username: "@aishapatel",
    social: "https://twitter.com",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=85",
    alt: "Portrait of Aisha Patel",
    rating: 5,
  },
  {
    id: "t-5",
    quote:
      "The silk kurta fabric I chose draped beautifully. Their team guided me through every weave and finish.",
    name: "Vikram Desai",
    role: "Designer · Jaipur",
    username: "@vikramdesai",
    social: "https://twitter.com",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=85",
    alt: "Portrait of Vikram Desai",
    rating: 5,
  },
  {
    id: "t-6",
    quote:
      "Custom tailoring for my boardroom wardrobe saved me hours each week — sharp fits, every single time.",
    name: "Priya Nair",
    role: "Executive client · Bengaluru",
    username: "@priyanair",
    social: "https://twitter.com",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&q=85",
    alt: "Portrait of Priya Nair",
    rating: 5,
  },
  {
    id: "t-7",
    quote:
      "Their linen collection is outstanding — breathable, refined, and perfect for our resort wear line.",
    name: "Karan Singh",
    role: "Retail partner · Goa",
    username: "@karansingh",
    social: "https://twitter.com",
    image:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=300&q=85",
    alt: "Portrait of Karan Singh",
    rating: 5,
  },
  {
    id: "t-8",
    quote:
      "I brought a vintage sketch and they translated it into a garment that exceeded my expectations.",
    name: "Sneha Reddy",
    role: "Creative client · Hyderabad",
    username: "@snehareddy",
    social: "https://twitter.com",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&q=85",
    alt: "Portrait of Sneha Reddy",
    rating: 5,
  },
  {
    id: "t-9",
    quote:
      "Reliable fabric sourcing at scale — consistent colour, weight, and hand-feel across every batch.",
    name: "Anil Verma",
    role: "Manufacturer · Delhi",
    username: "@anilverma",
    social: "https://twitter.com",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&q=85",
    alt: "Portrait of Anil Verma",
    rating: 5,
  },
];

function toUiTestimonial(item: Testimonial): UiTestimonial {
  return {
    image: item.image,
    name: item.name,
    username: item.username ?? `@${item.name.split(" ")[0].toLowerCase()}`,
    text: item.quote,
    social: item.social ?? "https://twitter.com",
  };
}

export const uiTestimonials: UiTestimonial[] = [
  toUiTestimonial(featuredTestimonial),
  ...testimonialList.map(toUiTestimonial),
];
