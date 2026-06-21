"use client";

import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Send,
  Twitter,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Clothing", href: "/clothing" },
  { label: "Fabric", href: "/fabric" },
  { label: "Tailoring", href: "/tailoring" },
];

const socialLinks = [
  { label: "Facebook", icon: Facebook, href: "https://facebook.com" },
  { label: "Twitter", icon: Twitter, href: "https://twitter.com" },
  { label: "Instagram", icon: Instagram, href: "https://instagram.com" },
  { label: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
];

export function Footerdemo() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-gradient-to-b from-[#3B281C] to-[#24170F] text-white">
      {/* Decorative Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-amber-400/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Newsletter */}
          <div>
            <h2 className="font-display text-3xl font-semibold text-white">
              Stay Connected
            </h2>

            <p className="mt-4 text-sm leading-6 text-white/70">
              Join Aagam Fashion for new fabric arrivals, tailoring updates,
              exclusive collections, and private atelier offers.
            </p>

            <form className="relative mt-6">
              <Input
                type="email"
                placeholder="Enter your email"
                className="
                  border-white/10
                  bg-white/5
                  pr-12
                  text-white
                  placeholder:text-white/40
                  backdrop-blur-sm
                "
              />

              <Button
                type="submit"
                size="icon"
                className="
                  absolute right-1 top-1
                  h-8 w-8 rounded-full
                  bg-background
                  text-primary
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:bg-amber-500
                "
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 font-display text-xl text-white">
              Quick Links
            </h3>

            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="
                    block
                    text-sm
                    text-white/70
                    transition-colors
                    hover:text-amber-400
                  "
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 font-display text-xl text-white">
              Contact Us
            </h3>

            <address className="space-y-3 text-sm not-italic text-white/70">
              <p>12 Heritage Lane</p>
              <p>Fashion District, Mumbai 400001</p>

              <p>
                Phone:{" "}
                <a
                  href="tel:+919999999999"
                  className="transition-colors hover:text-amber-400"
                >
                  +91 99999 99999
                </a>
              </p>

              <p>
                Email:{" "}
                <a
                  href="mailto:aagamfashion@gmail.com"
                  className="transition-colors hover:text-amber-400"
                >
                  aagamfashion@gmail.com
                </a>
              </p>
            </address>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-5 font-display text-xl text-white">
              Follow Us
            </h3>

            <div className="flex gap-3">
              {socialLinks.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="
                    flex h-11 w-11 items-center justify-center
                    rounded-full
                    border border-white/10
                    bg-white/5
                    text-white/70
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-[#EFE8D5]
                    hover:bg-[#EFE8D5]
                    hover:text-[#3B281C]
                  "
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-sm text-white/60">
                Crafted with precision, inspired by heritage, and tailored for
                modern elegance.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center md:flex-row">
          <p className="text-sm text-white/60">
            © {year} Aagam Fashion. All rights reserved.
          </p>

          <nav className="flex flex-wrap gap-6 text-sm">
            <Link
              href="/privacy-policy"
              className="text-white/60 transition-colors hover:text-amber-400"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-white/60 transition-colors hover:text-amber-400"
            >
              Terms of Service
            </Link>

            <Link
              href="/cookies"
              className="text-white/60 transition-colors hover:text-amber-400"
            >
              Cookie Settings
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
// "use client";

// import * as React from "react";
// import Link from "next/link";
// import {
//   Facebook,
//   Instagram,
//   Linkedin,
//   Moon,
//   Send,
//   Sun,
//   Twitter,
// } from "lucide-react";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Switch } from "@/components/ui/switch";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";

// const quickLinks = [
//   { label: "Home", href: "/" },
//   { label: "About Us", href: "/about" },
//   { label: "Clothing", href: "/clothing" },
//   { label: "Fabric", href: "/fabric" },
//   { label: "Tailoring", href: "/tailoring" },
// ];

// const socialLinks = [
//   { label: "Facebook", icon: Facebook, href: "https://facebook.com" },
//   { label: "Twitter", icon: Twitter, href: "https://twitter.com" },
//   { label: "Instagram", icon: Instagram, href: "https://instagram.com" },
//   { label: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
// ];

// function Footerdemo() {
//   const [isDarkMode, setIsDarkMode] = React.useState(false);
//   const year = new Date().getFullYear();

//   React.useEffect(() => {
//     document.documentElement.classList.toggle("dark", isDarkMode);
//   }, [isDarkMode]);

//   return (
//     <footer className="relative border-t border-border bg-background text-foreground transition-colors duration-300">
//       <div className="mx-auto max-w-7xl px-5 py-12 md:px-10 lg:px-10">
//         <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
//           <div className="relative">
//             <h2 className="mb-4 font-display text-3xl font-bold tracking-tight">
//               Stay Connected
//             </h2>
//             <p className="mb-6 font-body text-sm leading-6 text-muted-foreground">
//               Join Aagam Fashion for new fabric arrivals, tailoring updates, and
//               private atelier offers.
//             </p>
//             <form className="relative">
//               <Input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="pr-12 backdrop-blur-sm"
//                 aria-label="Email address"
//               />
//               <Button
//                 type="submit"
//                 size="icon"
//                 className="absolute right-1 top-1 h-8 w-8 rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
//               >
//                 <Send className="h-4 w-4" />
//                 <span className="sr-only">Subscribe</span>
//               </Button>
//             </form>
//             <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
//           </div>
//           <div>
//             <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
//             <nav className="space-y-2 text-sm" aria-label="Footer navigation">
//               {quickLinks.map((link) => (
//                 <Link
//                   key={link.href}
//                   href={link.href}
//                   className="block transition-colors hover:text-primary"
//                 >
//                   {link.label}
//                 </Link>
//               ))}
//             </nav>
//           </div>
//           <div>
//             <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
//             <address className="space-y-2 text-sm not-italic text-muted-foreground">
//               <p>12 Heritage Lane</p>
//               <p>Fashion District, Mumbai 400001</p>
//               <p>
//                 Phone:{" "}
//                 <a href="tel:+919999999999" className="hover:text-primary">
//                   +91 99999 99999
//                 </a>
//               </p>
//               <p>
//                 Email:{" "}
//                 <a
//                   href="mailto:aagamfashion@gmail.com"
//                   className="hover:text-primary"
//                 >
//                   aagamfashion@gmail.com
//                 </a>
//               </p>
//             </address>
//           </div>
//           <div className="relative">
//             <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
//             <TooltipProvider>
//               <div className="mb-6 flex space-x-4">
//                 {socialLinks.map(({ label, icon: Icon, href }) => (
//                   <Tooltip key={label}>
//                     <TooltipTrigger asChild>
//                       <Button
//                         asChild
//                         variant="outline"
//                         size="icon"
//                         className="rounded-full"
//                       >
//                         <a href={href} aria-label={label}>
//                           <Icon className="h-4 w-4" />
//                         </a>
//                       </Button>
//                     </TooltipTrigger>
//                     <TooltipContent>
//                       <p>{label}</p>
//                     </TooltipContent>
//                   </Tooltip>
//                 ))}
//               </div>
//             </TooltipProvider>
//             <div className="flex items-center space-x-2">
//               <Sun className="h-4 w-4" />
//               <Switch
//                 id="dark-mode"
//                 checked={isDarkMode}
//                 onCheckedChange={setIsDarkMode}
//               />
//               <Moon className="h-4 w-4" />
//               <Label htmlFor="dark-mode" className="sr-only">
//                 Toggle dark mode
//               </Label>
//             </div>
//           </div>
//         </div>
//         <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-center md:flex-row">
//           <p className="text-sm text-muted-foreground">
//             © {year} Aagam Fashion. All rights reserved.
//           </p>
//           <nav className="flex gap-4 text-sm" aria-label="Legal">
//             <Link href="#" className="transition-colors hover:text-primary">
//               Privacy Policy
//             </Link>
//             <Link href="#" className="transition-colors hover:text-primary">
//               Terms of Service
//             </Link>
//             <Link href="#" className="transition-colors hover:text-primary">
//               Cookie Settings
//             </Link>
//           </nav>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export { Footerdemo };
