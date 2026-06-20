import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope, Noto_Serif } from "next/font/google";
import "./globals.css";

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
      className={`${notoSerif.variable} ${manrope.variable} ${cormorant.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
