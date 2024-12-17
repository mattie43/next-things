"use client";

import { useEffect, useRef } from "react";
import dungsPNG from "@/app/rotmg/dungeons/imgs/rotmg-dungeons.png";
import { Typography } from "@mui/material";

interface CanvasCropProps {
  index: number;
  dung: any;
}

export default function SingleDungeon({ index, dung }: CanvasCropProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const w = dung.width || 86;
  const h = dung.height || 86;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !ctx) return;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = dungsPNG.src;
    img.onload = () => {
      canvas.width = w;
      canvas.height = h;
      ctx.drawImage(img, 0, index * 82, w, h, 0, 0, w, h);
    };
  }, [dung]);

  return (
    <div>
      <Typography variant="caption">{dung.name}</Typography>
      <canvas className="m-auto" ref={canvasRef} />
    </div>
  );
}
