"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";
import SmoothScroll from "./smooth-scroll";

/**
 * Client providers mounted once at the root: Lenis smooth scroll + a global
 * MotionConfig that respects the user's reduced-motion preference (motion
 * applies this after hydration, so there's no SSR mismatch).
 */
export default function Providers({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <SmoothScroll />
      {children}
    </MotionConfig>
  );
}
