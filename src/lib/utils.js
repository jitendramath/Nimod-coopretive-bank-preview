import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility to merge tailwind classes intelligently
 * This prevents class conflicts and makes code cleaner
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
