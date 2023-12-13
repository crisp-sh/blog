import { 
  Inter, 
  Bodoni_Moda, 
  Red_Hat_Mono, 
  Red_Rose, 
  Montserrat, 
  Nabla,
  Foldit,
  Imbue
} from "next/font/google";

export const inter = Inter({
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-inter',
  fallback: ['Helvetica', 'sans-serif'],
  subsets: ["latin"],
});

export const montserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-monsterrat',
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

export const imbue = Imbue({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-imbue',
  fallback: ['Times New Roman', 'Times', 'serif'],
  subsets: ["latin"],
});

// export const foldit = Foldit({
//   weight: ['400', '700'],
//   display: 'swap',
//   variable: '--font-foldit',
//   fallback: ['Times New Roman', 'Times', 'serif'],
//   subsets: ["latin"],
// });

// export const nabla = Nabla({
//   weight: ['400'],
//   display: 'swap',
//   variable: '--font-nabla',
//   fallback: ['Times New Roman', 'Times', 'serif'],
//   subsets: ["latin"],
// });

// export const kalnia = Kalnia({
//     weight: ['400', '500', '600', '700', '800', '900'],
//     display: 'swap',
//     variable: '--font-bodoni',
//     fallback: ['Times New Roman', 'Times', 'serif'],
//     subsets: ["latin"],
// });

// export const specialelite = Special_Elite({
//   weight: ['400'],
//   display: 'swap',
//   variable: '--font-specialelite',
//   fallback: ['Times New Roman', 'Times', 'serif'],
//   subsets: ["latin"],
// });