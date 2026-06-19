"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

type Tag = "div" | "section" | "article" | "span";

const TAGS = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  span: motion.span,
} as const;

/**
 * Scroll reveal: fades + rises its content in as it enters the viewport, and
 * back out as it leaves (set `once` to keep it once it has appeared). Renders
 * with the given `className`, so it can stand in for the element it replaces
 * (e.g. a grid container) without changing layout.
 *
 * Reduced motion is handled globally by <MotionConfig reducedMotion="user">
 * (see providers.tsx) — transforms are dropped for those users automatically.
 */
export default function Reveal({
  as = "div",
  className,
  children,
  y = 24,
  delay = 0,
  duration = 0.7,
  once = false,
  amount = 0.2,
}: {
  as?: Tag;
  className?: string;
  children: ReactNode;
  y?: number;
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
}) {
  const MotionTag = TAGS[as];
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
