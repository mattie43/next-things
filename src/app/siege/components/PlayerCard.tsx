"use client";

import { TPlayer } from "@/app/siege/siege.types";
import { pastelColors } from "@/constants";
import { Button, Tooltip, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Image from "next/image";
import Link from "next/link";
import twitchSVG from "../imgs/twitch.svg";
import xSVG from "../imgs/x.svg";
import { useState } from "react";
import { createStats } from "./createStats";

export const PlayerCard = ({
  player,
  ind,
}: {
  player: TPlayer;
  ind: number;
}) => {
  const [openStats, setOpenStats] = useState(false);
  const kost = "Kill, Objective (plant or defuse), Survive, Trade";

  const getKD = (kd?: string) => {
    if (!kd) return "0.00";
    const [a, b] = kd.split("-");
    const num = parseInt(a) / parseInt(b);
    return num.toFixed(2);
  };

  return (
    <div
      style={{
        display: "flex",
        border: `2px solid ${pastelColors[ind % pastelColors.length]}`,
        padding: "0.5em",
        margin: "0 0.5em",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex" }}>
        <Image
          height={159}
          width={150}
          src={player.image_url}
          alt="Player's Image"
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5em",
            margin: "auto",
          }}
        >
          <div>IGN: {player.ign}</div>
          <div>Name: {player.name}</div>
          <Button
            onClick={() => setOpenStats((prev) => !prev)}
            sx={{ width: "fit-content" }}
          >
            Stats
            {openStats ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </Button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            marginLeft: "auto",
          }}
        >
          <Tooltip title={player.flag.country} placement="right">
            <Image
              height={30}
              width={40}
              src={player.flag.image_url}
              alt="Player's Flag"
            />
          </Tooltip>
          {player.twitch_url && (
            <Link
              href={player.twitch_url}
              target="_blank"
              style={{ display: "flex" }}
            >
              <Image height={30} width={40} src={twitchSVG} alt="Twitch Logo" />
            </Link>
          )}
          {player.twitter_url && (
            <Link
              href={player.twitter_url}
              target="_blank"
              style={{ display: "flex" }}
            >
              <Image height={30} width={40} src={xSVG} alt="Twitch Logo" />
            </Link>
          )}
        </div>
      </div>
      {openStats && (
        <div
          style={{
            marginTop: "0.5em",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography>Overall Rating: {player.stats?.rating}</Typography>
          <div
            style={{
              marginTop: "1em",
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              columnGap: "3em",
            }}
          >
            {createStats(player.stats)?.map((item) => (
              <Tooltip title={item.tooltip} placement="left">
                <Typography variant="body2">
                  {item.label}: {item.value}
                </Typography>
              </Tooltip>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "1em",
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              Top Attacker:
              <Tooltip
                title={player.stats?.operators?.atk?.name}
                slotProps={{
                  popper: {
                    modifiers: [
                      {
                        name: "offset",
                        options: {
                          offset: [0, -16],
                        },
                      },
                    ],
                  },
                }}
                placement="top"
              >
                <Image
                  src={player.stats?.operators?.atk?.logo_url || ""}
                  height={72}
                  width={69}
                  alt={player.stats?.operators?.atk?.name || ""}
                />
              </Tooltip>
            </Typography>
            <Typography
              variant="body2"
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              Top Defender:
              <Tooltip
                title={player.stats?.operators?.def?.name}
                slotProps={{
                  popper: {
                    modifiers: [
                      {
                        name: "offset",
                        options: {
                          offset: [0, -16],
                        },
                      },
                    ],
                  },
                }}
                placement="top"
              >
                <Image
                  src={player.stats?.operators?.def?.logo_url || ""}
                  height={72}
                  width={69}
                  alt={player.stats?.operators?.def?.name || ""}
                />
              </Tooltip>
            </Typography>
          </div>
        </div>
      )}
    </div>
  );
};

// {
//     "operators": {
//         "atk": {
//             "id": 4,
//             "side": "ATTACK",
//             "name": "Ash",
//             "logo_url": "https://cdn-siege.fly.dev/operators/attack/ash.svg",
//             "web_url": "https://website-siege.fly.dev/operators/ash"
//         },
//         "def": {
//             "id": 40,
//             "side": "DEFEND",
//             "name": "Vigil",
//             "logo_url": "https://cdn-siege.fly.dev/operators/defend/vigil.svg",
//             "web_url": "https://website-siege.fly.dev/operators/vigil"
//         }
//     }
// }
