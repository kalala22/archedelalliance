"use client";

import { useCounter } from "@/hooks/use-counter";
import { cn, getLucideIcon } from "@/lib/utils";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  label: string;
  icon: string;
  light?: boolean;
}

/**
 * Animated counter that counts up when scrolled into view.
 */
export function AnimatedCounter({ value, suffix = "", label, icon, light = false }: AnimatedCounterProps) {
  const { count, ref } = useCounter(value);

  // Dynamically get icon component
  const IconComponent = getLucideIcon(icon);

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <div
        className={cn(
          "mb-4 flex h-14 w-14 items-center justify-center rounded-2xl",
          light
            ? "bg-[var(--color-gold)]/10 text-[var(--color-gold)]"
            : "bg-[var(--color-navy)]/5 text-[var(--color-navy)]"
        )}
      >
        <IconComponent className="h-6 w-6" />
      </div>
      <span
        className={cn(
          "font-heading text-4xl font-bold md:text-5xl",
          light ? "text-white" : "text-[var(--color-navy)]"
        )}
      >
        {count}
        {suffix}
      </span>
      <span
        className={cn(
          "mt-1 text-sm font-medium uppercase tracking-wider",
          light ? "text-gray-400" : "text-[var(--color-gray-500)]"
        )}
      >
        {label}
      </span>
    </div>
  );
}
