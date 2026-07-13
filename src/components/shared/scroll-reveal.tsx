"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, scaleIn, defaultViewport } from "@/lib/animations";

type AnimationType = "fadeUp" | "fadeLeft" | "fadeRight" | "scale";

const variantMap = {
  fadeUp: fadeInUp,
  fadeLeft: fadeInLeft,
  fadeRight: fadeInRight,
  scale: scaleIn,
};

interface ScrollRevealProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
}

/**
 * Wrapper component that reveals its children with animation when scrolled into view.
 */
export function ScrollReveal({
  children,
  animation = "fadeUp",
  delay = 0,
  className,
}: ScrollRevealProps) {
  const variants = variantMap[animation];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
