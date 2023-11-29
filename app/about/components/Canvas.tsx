"use client";

import { useEffect } from "react";

import { renderCanvas } from "@/lib/rendercanvas"


export default function Canvas() {
  useEffect(() => {
    renderCanvas
  }, []);

  return (
    <canvas className="bg-skin-base pointer-events-none absolute inset-0" id="canvas"></canvas>
  );
}