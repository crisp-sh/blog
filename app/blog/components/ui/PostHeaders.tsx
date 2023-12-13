"use client";

import { ReactNode } from "react";
import clsx from "clsx";
import { useTheme } from "next-themes";
import { getThemeFont } from "@/lib/utils";


type PostHeaderProps = {
  title: string;
  size: string;
  className: ReactNode;
};

export default function PostHeader({
  title,
  size,
  className,
}: PostHeaderProps) {

  const { theme } = useTheme();

  return (
    <>
      <p className={clsx(`animate-in text-${size} ${className}`)}>
        {title}
      </p>
    </>
  );
}
