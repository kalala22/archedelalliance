"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeInUp, defaultViewport } from "@/lib/animations";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

/**
 * Reusable section title with ornament and scroll-reveal animation.
 */
export function SectionTitle({
  title,
  subtitle,
  description,
  align = "center",
  light = false,
  className,
}: SectionTitleProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={fadeInUp}
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {subtitle && (
        <span
          className={cn(
            "mb-3 inline-block text-sm font-semibold uppercase tracking-[0.2em]",
            light ? "text-[var(--color-gold-light)]" : "text-[var(--color-gold)]"
          )}
        >
          {subtitle}
        </span>
      )}

      <h2
        className={cn(
          "font-heading text-3xl font-bold md:text-4xl lg:text-5xl",
          light ? "text-white" : "text-[var(--color-navy)]"
        )}
      >
        {title}
      </h2>

      {/* Gold ornament line */}
      <div
        className={cn(
          "mt-4 flex items-center gap-3",
          align === "center" && "justify-center"
        )}
      >
        <span className="h-[2px] w-8 bg-gradient-to-r from-transparent to-[var(--color-gold)]" />
        <span className="h-2 w-2 rotate-45 bg-[var(--color-gold)]" />
        <span className="h-[2px] w-8 bg-gradient-to-l from-transparent to-[var(--color-gold)]" />
      </div>

      {description && (
        <p
          className={cn(
            "mx-auto mt-5 max-w-2xl text-base leading-relaxed md:text-lg",
            light ? "text-gray-300" : "text-[var(--color-gray-500)]"
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
