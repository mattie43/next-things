"use client";

import { useEffect, useRef } from "react";
import dungsPNG from "@/app/rotmg/dungeons/imgs/rotmg-dungeons.png";
import Link from "next/link";
import useLocalStorage from "@/hooks/useLocalStorage";

interface CanvasCropProps {
  index: number;
  dung: any;
}

export default function SingleDungeon({ index, dung }: CanvasCropProps) {
  const { data: crossedDungeons, updateData: updateCrossedDungeons } =
    useLocalStorage("crossed-dungeons", []);
  const { data: showNames } = useLocalStorage("show-dugneon-names", true);

  const link = `https://www.realmeye.com/wiki/${dung.name
    .replaceAll(" ", "-")
    .replaceAll("'", "-")}`;
  const isCrossed = crossedDungeons?.includes(dung.name);

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

  const handleDungeonClick = () => {
    updateCrossedDungeons(dung.name);
  };

  const opacityCheck = () => {
    if (isCrossed) return "opacity-30";
    return "opacity-100 hover:opacity-80";
  };

  return (
    <div
      className={`text-center ${isCrossed ? "opacity-30" : "opacity-100"}`}
      onClick={handleDungeonClick}
    >
      <Link className="text-sm" href={link} target="_blank" hidden={!showNames}>
        {dung.name}
      </Link>
      <canvas
        className={`m-auto cursor-pointer ${opacityCheck()}`}
        ref={canvasRef}
      />
    </div>
  );
}
