import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  Baby,
  Calendar,
  Church,
  Cross,
  Flame,
  HandHelping,
  Heart,
  Megaphone,
  Music,
  Radio,
  Shield,
  Star,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { ComponentType } from "react";

const iconsMap: Record<string, ComponentType<{ className?: string }>> = {
  Baby: Baby as unknown as ComponentType<{ className?: string }>,
  Calendar: Calendar as unknown as ComponentType<{ className?: string }>,
  Church: Church as unknown as ComponentType<{ className?: string }>,
  Cross: Cross as unknown as ComponentType<{ className?: string }>,
  Flame: Flame as unknown as ComponentType<{ className?: string }>,
  HandHelping: HandHelping as unknown as ComponentType<{ className?: string }>,
  Heart: Heart as unknown as ComponentType<{ className?: string }>,
  Megaphone: Megaphone as unknown as ComponentType<{ className?: string }>,
  Music: Music as unknown as ComponentType<{ className?: string }>,
  Radio: Radio as unknown as ComponentType<{ className?: string }>,
  Shield: Shield as unknown as ComponentType<{ className?: string }>,
  Star: Star as unknown as ComponentType<{ className?: string }>,
  Users: Users as unknown as ComponentType<{ className?: string }>,
};

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
  fallback: ComponentType<{ className?: string }> = Heart as unknown as ComponentType<{ className?: string }>
): ComponentType<{ className?: string }> {
  return iconsMap[iconName] || fallback;
}
