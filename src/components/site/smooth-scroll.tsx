"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Professional inertia smooth-scrolling (Lenis). Mounted once at the root.
 * Disabled for users who prefer reduced motion. Uses real scroll position
 * (not transforms), so position: sticky and IntersectionObserver-based
 * reveals keep working. `anchors: true` smooth-scrolls in-page #links.
 */
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      anchors: true,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}
