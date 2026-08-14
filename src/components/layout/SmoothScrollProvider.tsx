"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  type ReactNode,
} from "react";
import Lenis from "lenis";

const SmoothScrollContext = createContext<Lenis | null>(null);

export function useLenis() {
  return useContext(SmoothScrollContext);
}

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.07,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
      // Keep native touch scrolling on mobile for best UX
      syncTouch: false,
    });

    lenisRef.current = lenis;

    // Expose globally so other scripts can interact
    (window as unknown as Record<string, unknown>).lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
      delete (window as unknown as Record<string, unknown>).lenis;
    };
  }, []);

  return (
    <SmoothScrollContext.Provider value={lenisRef.current}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
