// lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { bodoni, redhatmono, redrose } from "@/fonts"

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
  // Patterns to match various extraneous information in song titles
  const patterns = [
    /\s*\(.*?\)|\s*\[.*?\]/g, // Catch all for parentheses and square brackets, i.e., "(...)", "[...]"
    /\s?\(ft[^\)]*\)/ig, // feat. abbreviated
    /\s[-–—]\s?Remix/ig, // "- Remix" variations
    /\s[-–—]\s?Demo/ig, // "- Remix" variations
    /\s[-–—]\s?Live/ig, // "- Live" variations
    /\s[-–—]\s?Acoustic/ig, // "- Acoustic" variations
    /\s?\(feat[^\)]*\)/ig, // feat.
    /\s?\(Deluxe Edition\)/ig,
    /\s?\(Acoustic\)/ig,
    /\s?\(Extended Version\)/ig,
    /\s?\(Explicit\)/ig,
    /\s?\(Clean\)/ig,
    /\s?\(Radio Edit\)/ig,
    /\s?\(Single Version\)/ig,
    /\s?\(Remaster(ed)?\s?(\d{4})?\)/ig, // "Remastered"
    /\s\(\d{4}\)/ig, // Any 4+ digit number in parentheses (year)
    /\s[-–—]\s?Remastered\s\d{4}/ig, // "- Remastered YYYY"
    /\s?\[[^\]]*\]/ig, // Content in square brackets
  ];

  // Applying all patterns to the title
  return patterns.reduce((cleanedTitle, pattern) => cleanedTitle.replace(pattern, ''), title);
}

export function getFirstArtist(artistList: string): string {
  const artists = artistList.split(',');
  if (artists[1] === " Jr.") {
    return `${artists[0]}, Jr.`; // Fly Away, Grover.
  }
  
  return artists[0].trim();
}

export function nFormatter(num: number, digits?: number) {
  if (!num) return "0";
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "K" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  const item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item
    ? (num / item.value).toFixed(digits || 1).replace(rx, "$1") + item.symbol
    : "0";
}

export const appUrl = process.env.NEXT_PUBLIC_APP_URL;