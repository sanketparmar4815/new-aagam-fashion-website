"use client";

import { useEffect, useRef, type ReactNode, type CSSProperties, type ElementType } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  /** Extra CSS class names */
  className?: string;
  /** Delay in ms before the animation starts after entering viewport */
  delay?: number;
  /** translateY offset in px (default 32) */
  offset?: number;
  /** Animation duration in ms (default 700) */
  duration?: number;
  /** IntersectionObserver threshold 0-1 (default 0.15) */
  threshold?: number;
  /** HTML tag to render (default 'div') */
  as?: ElementType;
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  offset = 32,
  duration = 700,
  threshold = 0.15,
  as: Tag = "div",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add visible class after optional delay
            if (delay > 0) {
              setTimeout(() => {
                node.classList.add("sr-visible");
              }, delay);
            } else {
              node.classList.add("sr-visible");
            }
            observer.unobserve(node);
          }
        });
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [delay, threshold]);

  const style: CSSProperties = {
    "--sr-offset": `${offset}px`,
    "--sr-duration": `${duration}ms`,
  } as CSSProperties;

  const Component = Tag as React.ElementType;

  return (
    <Component
      ref={ref}
      className={`sr-reveal ${className}`}
      style={style}
    >
      {children}
    </Component>
  );
}
