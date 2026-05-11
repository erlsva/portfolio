import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * This helper function is used inside of a className to resolve `conditionals` and Tailwind `conflicts`.
 */
export function cn(...inputs: unknown[]) {
  return twMerge(clsx(inputs));
}
