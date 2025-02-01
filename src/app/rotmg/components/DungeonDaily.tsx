import { pastelColors } from "@/constants";
import { Close } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import { ROTMG_COMBINED_DUNGEONS } from "../rotmgDungeons.constants";
import dungsPNG from "@/app/rotmg/imgs/rotmg-dungeons.png";
import useSettings from "../useSettings.hook";
import Link from "next/link";
import { useRef, useEffect } from "react";

export default function DungeonDaily({ dung, index }: any) {
  const { setSettings } = useSettings();
  const dungeon = ROTMG_COMBINED_DUNGEONS.find((d) => d.name === dung);
  const link = `https://www.realmeye.com/wiki/${dungeon?.name
    .replaceAll(" ", "-")
    .replaceAll("'", "-")}`;

  const handleRemove = (ind: number) => {
    setSettings((prev) => ({
      ...prev,
      dailyDungeonList: prev.dailyDungeonList.filter((_, i) => i !== ind),
    }));
  };

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const w = dungeon?.width || 86;
  const h = dungeon?.height || 86;

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
      ctx.drawImage(img, 0, (dungeon?.imageInd || 0) * 82, w, h, 0, 0, w, h);
    };
  }, [dungeon]);

  return (
    <div
      key={index}
      className="flex flex-col p-2 pr-10 text-center relative"
      style={{
        border: `2px solid ${pastelColors[index % pastelColors.length]}`,
      }}
    >
      <IconButton
        sx={{ position: "absolute", top: 2, right: 2 }}
        onClick={() => handleRemove(index)}
        size="small"
      >
        <Close sx={{ fontSize: "20px" }} />
      </IconButton>
      <Link href={link} target="_blank">
        {dungeon?.name}
      </Link>
      <div>
        <canvas className="m-auto" ref={canvasRef} />
      </div>
    </div>
  );
}
