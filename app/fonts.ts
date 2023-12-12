import { Inter, Bodoni_Moda, Red_Hat_Mono, Red_Rose } from "next/font/google";
// import localFont from "next/font/local";

// export const cardillac = localFont({
//   src: [
//     {
//       path: './cardillac-lig-webfont.woff',
//       style: 'normal',
//     }
//   ],
//   display: 'swap',
//   variable: '--font-cardillac',
//   fallback: ['Times New Roman', 'Times', 'serif'],
// });

export const inter = Inter({
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-inter',
  fallback: ['Helvetica', 'sans-serif'],
  subsets: ["latin"],
});

export const bodoni = Bodoni_Moda({
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-bodoni',
  fallback: ['Times New Roman', 'Times', 'serif'],
  subsets: ["latin"],
});

// export const kalnia = Kalnia({
//     weight: ['400', '500', '600', '700', '800', '900'],
//     display: 'swap',
//     variable: '--font-bodoni',
//     fallback: ['Times New Roman', 'Times', 'serif'],
//     subsets: ["latin"],
// });

export const redrose = Red_Rose({
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-redrose',
  fallback: ['Times New Roman', 'Times', 'serif'],
  subsets: ["latin"],
});

export const redhatmono = Red_Hat_Mono({
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-redhatmono',
  fallback: ['Times New Roman', 'Times', 'serif'],
  subsets: ["latin"],
});