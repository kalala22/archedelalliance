import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import * as LucideIcons from "lucide-react";
import type { ComponentType } from "react";

/**
 * Merge Tailwind CSS classes with proper precedence handling.
 * Combines clsx for conditional classes and tailwind-merge for deduplication.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Safely retrieve a Lucide icon component by name string.
 */
export function getLucideIcon(
  iconName: string,
  fallback: ComponentType<{ className?: string }> = LucideIcons.Heart as unknown as ComponentType<{ className?: string }>
): ComponentType<{ className?: string }> {
  const iconsMap = LucideIcons as unknown as Record<string, ComponentType<{ className?: string }>>;
  return iconsMap[iconName] || fallback;
}
