// lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function addCommas(x: number | null | undefined): string {
  if (x == null) return ''; // Return an empty string for null or undefined
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getThemeFont(theme: string | undefined): string {  
  switch (theme) {
    case "light":
      return "font-light"; // Replace with actual class names
    case "dark":
      return "font-dark"; // Replace with actual class names
    case "terminal":
      return "font-mono tracking-tight";
    case "orchid":
      return "font-serif tracking-tight"; // Replace with actual class names
    default:
      return ""; // Default case if no theme matches
  }
}