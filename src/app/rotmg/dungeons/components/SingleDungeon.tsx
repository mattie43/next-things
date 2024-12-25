"use client";

import { useEffect, useRef } from "react";
import { TRotmgDungeon } from "@/app/rotmg/dungeons/rotmgDungeons.constants";
import { default as NextImage } from "next/image";
import dungsPNG from "@/app/rotmg/dungeons/imgs/rotmg-dungeons.png";
import gravestonePNG from "@/app/rotmg/dungeons/imgs/gravestone.png";
import halfGravestonePNG from "@/app/rotmg/dungeons/imgs/half_gravestone.png";
import Link from "next/link";
import useSettings from "@/app/rotmg/dungeons/useSettings.hook";

export default function SingleDungeon({ dung }: { dung: TRotmgDungeon }) {
  const { settings, setSettings } = useSettings();
  const isCrossed = settings.crossedDungeons.includes(dung.name);
  const hideCompleted = settings.hideCompleted;
  const showNames = settings.showNames;
  const showDifficulty = settings.showDifficulty;
  const diffArr = new Array(Math.floor(dung.difficulty)).fill(0);
  const hasHalf = dung.difficulty % 1 !== 0;
  const link = `https://www.realmeye.com/wiki/${dung.name
    .replaceAll(" ", "-")
    .replaceAll("'", "-")}`;

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
      ctx.drawImage(img, 0, dung.imageInd * 82, w, h, 0, 0, w, h);
    };
  }, [dung]);

  const opacityCheck = () => {
    if (isCrossed) return "opacity-30";
    return "opacity-100 hover:opacity-80";
  };

  const updateCrossedDungeons = () => {
    setSettings((prev) => ({
      ...prev,
      crossedDungeons: [...prev.crossedDungeons, dung.name],
    }));
  };

  const hide = hideCompleted && isCrossed;

  return (
    <div
      className={`flex flex-col items-center gap-1 ${
        isCrossed ? "opacity-30" : "opacity-100"
      } ${hide ? "hidden" : ""}`}
    >
      <Link className="text-sm" href={link} target="_blank" hidden={!showNames}>
        {dung.name}
      </Link>
      <div
        className={`flex gap-[1px] text-sm ${showDifficulty ? "" : "hidden"}`}
      >
        {diffArr.map((_, i) => (
          <NextImage
            key={i}
            src={gravestonePNG}
            alt="gravestone"
            height={16}
            width={12}
            style={{
              width: "auto",
              height: "auto",
            }}
          />
        ))}
        {hasHalf && (
          <NextImage
            src={halfGravestonePNG}
            alt="half gravestone"
            height={16}
            width={12}
            style={{
              width: "auto",
              height: "auto",
            }}
          />
        )}
        {`(${dung.difficulty})`}
      </div>
      <canvas
        className={`m-auto cursor-pointer ${opacityCheck()}`}
        ref={canvasRef}
        onClick={updateCrossedDungeons}
      />
    </div>
  );
}
