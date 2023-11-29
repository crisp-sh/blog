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

export const metadata: Metadata = {
  title: "Home | Brian Ruiz",
  description: "I am a full-stack software engineer who basically just enjoys creating things.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, "antialiased bg-primary text-primary")}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          
          <div className="flex flex-col min-h-screen justify-center items-center">
            <div className="w-full max-w-4xl p-6 md:p-10">
              {children}
            </div>
            <Navigation />
          </div>
        </ThemeProvider>
        <Analytics />
        {/* meticulous recorder script */}
        <script data-project-id="pX9lSO92h5Tzp5h7WwrcH8vAsVygzVXPMzC0oQDI" src="https://snippet.meticulous.ai/v1/meticulous.js"/>
      </body>
    </html>
  );
}
