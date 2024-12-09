"use client";

import dungsPNG from "@/app/rotmg/dungeons/imgs/rotmg-dungeons.png";
import crossSVG from "@/app/rotmg/dungeons/imgs/cross.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SingleDungeon({
  index,
  name,
}: {
  index: number;
  name: string;
}) {
  const [crossedOut, setCrossedOut] = useState(false);
  const urlName = name.replaceAll(" ", "-").replaceAll("'", "-");
  const url = `https://www.realmeye.com/wiki/${urlName}`;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Link href={url} target="_blank">
        {name}
      </Link>
      <div
        style={{
          width: "86px",
          height: "82px",
          overflow: "hidden",
          position: "relative",
          cursor: "pointer",
        }}
        onClick={() => setCrossedOut((prev) => !prev)}
      >
        <Image
          src={dungsPNG}
          alt="Cropped Dungeon Image"
          width={86}
          height={5642}
          style={{
            position: "absolute",
            top: `${index * -82}px`,
            left: 0,
          }}
          className="dungeon-image"
        />
        <Image
          src={crossSVG}
          alt="Cross"
          width={46}
          height={46}
          style={{
            fill: "red",
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
          hidden={!crossedOut}
        />
      </div>
    </div>
  );
}
