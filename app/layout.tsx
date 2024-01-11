/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { bodoni, redhatmono, redrose, nunitosans } from "@/fonts"

import { ThemeProvider } from "@/components/ThemeProvider";
import Navigation from "@/components/layout/header/navigation";
import { Toaster } from "@/components/ui/toaster";

export const dynamic = 'auto';

export const metadata: Metadata = {
  title: "Home | SH Crisp",
  description: "People, places & technology.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`
        ${bodoni.variable} 
        ${redhatmono.variable} 
        ${redrose.variable}
      `}
      suppressHydrationWarning
    >
      <body className={`antialiased bg-primary text-primary`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen items-center">
            <Navigation />
            <div className={`${nunitosans.className} w-full max-w-4xl p-6 md:p-10 max-lg:mt-[64px]`}>
              {children}
            </div>
          </div>
        <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
