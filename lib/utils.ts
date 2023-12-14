// lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { bodoni, redhatmono, inter, redrose } from "@/fonts"

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
      return `${bodoni.className} tracking-wide`;
    case "dark":
      return `${redrose.className} tracking-wide`;
    case "terminal":
      return `${redhatmono.className} tracking-tight`;
    case "sakura":
      return `${bodoni.className} tracking-wide`;
    case "system":
      return `${bodoni.className} tracking-wide`;
    default:
      return "";
  }
}

export function getThemeFontVariable(theme: string | undefined): string {
  switch (theme) {
    case "light":
      return bodoni.variable;
    case "dark":
      return redrose.variable;
    case "terminal":
      return redhatmono.variable;
    case "sakura":
      return bodoni.variable;
    case "system":
      return bodoni.variable;
    default:
      return "";
  }
}

export function truncateString(str: string | undefined, maxLength: number): string {
  if (!str) return "";
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength) + '...';
}

export function cleanSongTitle(title: string): string {
  const featRegex = /\s\(feat\..*\)/;
  const remasteredRegex = /\s-\sRemastered\s\d{4}/;

  let cleanedTitle = title.replace(featRegex, '');
  cleanedTitle = cleanedTitle.replace(remasteredRegex, '');

  return cleanedTitle;
}

export function getFirstArtist(artistList: string): string {
  const artists = artistList.split(',');
  return artists[0].trim();
}