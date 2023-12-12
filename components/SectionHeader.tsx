"use client";

import { ReactNode } from "react";
import clsx from "clsx";
import { useTheme } from "next-themes";
import { getThemeFont } from "@/lib/utils";


type SectionProps = {
  heading: string;
  children: ReactNode;
};

export default function SectionHeader({
  heading,
  children,
}: SectionProps) {

  const { theme } = useTheme();

  return (
    <>
      <h1 className={clsx(getThemeFont(theme), "animate-in text-3xl font-semibold text-primary")}>
        {heading}
      </h1>
      {children}
    </>
  );
}
