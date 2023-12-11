/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import clsx from "clsx";

import { ThemeProvider } from "@/components/ThemeProvider";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const dynamic = 'auto';

export const metadata: Metadata = {
  title: "Home | SH Crisp",
  description: "People, places & technology.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, "antialiased bg-primary text-primary")}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          
          <div className="flex flex-col min-h-screen items-center">
            <div className="w-full max-w-3xl p-6 md:p-10 lg:top-[50px] md:top-[50px] sm:top-[50px]">
              {children}
            </div>
            <Navigation />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
