"use client";

import { useEffect, useRef } from "react";
import { useRotmgOptionsContext } from "@/context/rotmgOptions.context";
import dungsPNG from "@/app/rotmg/dungeons/imgs/rotmg-dungeons.png";
import Link from "next/link";

interface CanvasCropProps {
  index: number;
  dung: any;
}

export default function SingleDungeon({ index, dung }: CanvasCropProps) {
  const { options, addRemoveDungeon } = useRotmgOptionsContext();
  const link = `https://www.realmeye.com/wiki/${dung.name
    .replaceAll(" ", "-")
    .replaceAll("'", "-")}`;
  const isCrossed = options?.crossedDungeons?.includes?.(dung.name) ?? false;

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
    <div
      className={`text-center ${isCrossed ? "opacity-30" : ""}`}
      onClick={() => addRemoveDungeon(dung.name)}
    >
      <Link
        className="text-sm"
        href={link}
        target="_blank"
        hidden={!options.showDungeonNames}
      >
        {dung.name}
      </Link>
      <canvas className="m-auto" ref={canvasRef} />
    </div>
  );
}
