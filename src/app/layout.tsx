import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope, Noto_Serif } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const canela = localFont({
  src: [
    {
      path: "./fonts/CanelaText-Thin-Trial.otf",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-canela",
  display: "swap",
});

const canelaText = localFont({
  src: [
    {
      path: "./fonts/CanelaText-Regular-Trial.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/CanelaText-Medium-Trial.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/CanelaText-Bold-Trial.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-canela-text",
  display: "swap",
});

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-noto-serif",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const siteUrl = "https://www.aagamfashion.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Aagam Fashion | Crafted Fabrics, Tailored Perfection",
    template: "%s | Aagam Fashion",
  },
  description:
    "Premium quality fabrics, designer wear, and bespoke tailoring — Aagam Fashion brings your fashion vision to life.",
  openGraph: {
    title: "Aagam Fashion | Crafted Fabrics, Tailored Perfection",
    description:
      "Premium fabrics, designer wear, and bespoke tailoring services.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#623e21",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${notoSerif.variable} ${manrope.variable} ${cormorant.variable} ${canela.variable} ${canelaText.variable}`}
    >
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
