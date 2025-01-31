"use client";

import { pastelColors } from "@/constants";
import { IconButton, Tooltip, Typography } from "@mui/material";
import { MARKS } from "@/app/rotmg/imgs/marks";
import { useState } from "react";
import { Close } from "@mui/icons-material";
import { COMBINED_REWARDS } from "../imgs/rewards";
import useSettings from "@/app/rotmg/useSettings.hook";
import Image from "next/image";
import Infobox from "../components/Infobox";

export default function page() {
  const { settings, setSettings } = useSettings();
  const [marked, setMarked] = useState<string[]>([]);
  const quests = settings.dailyQuestList;
  const showGuide = settings.showGuides;

  const handleRemove = (id?: string) => {
    setSettings((prev) => ({
      ...prev,
      dailyQuestList: prev.dailyQuestList.filter((q) => q.id !== id),
    }));
  };

  const handleMark = (id?: string, ind?: number) => {
    setMarked((prev) => {
      if (prev.includes(`${id}-${ind}`)) {
        return prev.filter((m) => m !== `${id}-${ind}`);
      } else {
        return [...prev, `${id}-${ind}`];
      }
    });
  };

  const info =
    "Select tinkerer dailies from the side panel to start tracking them. Clicking on a mark will 'mark' it as collected. Clicking on the 'X' will remove the quest from the list.";

  return (
    <div className="flex flex-col h-full w-full">
      {showGuide && <Infobox info={info} />}
      <div className="grid grid-cols-1 2xl:grid-cols-2 gap-2 px-4 p-4 overflow-auto w-full content-start flex-1">
        {quests?.map((quest, ind) => (
          <div
            key={quest.id}
            className="flex flex-col p-2 pr-10 relative"
            style={{
              border: `2px solid ${pastelColors[ind % pastelColors.length]}`,
            }}
          >
            <IconButton
              sx={{ position: "absolute", top: 2, right: 2 }}
              onClick={() => handleRemove(quest.id)}
              size="small"
            >
              <Close sx={{ fontSize: "20px" }} />
            </IconButton>
            <Typography fontSize="medium">Task: {quest?.task}</Typography>
            <Typography fontSize="medium">
              Desc: {quest?.description}
            </Typography>
            <Typography fontSize="medium" className="flex gap-1 items-center">
              Marks:
              {quest?.marks.map((mark: string, ind) => (
                <Tooltip title={mark} key={`${mark}-${ind}`}>
                  <Image
                    src={MARKS[mark]?.image || ""}
                    alt={mark}
                    width={36}
                    height={36}
                    style={{
                      cursor: "pointer",
                      opacity: marked.includes(`${quest.id}-${ind}`) ? 0.3 : 1,
                    }}
                    onClick={() => handleMark(quest.id, ind)}
                  />
                </Tooltip>
              ))}
            </Typography>
            <Typography fontSize="medium" className="flex gap-1 items-center">
              Rewards:
              {quest?.rewards.map((reward: string, ind) => (
                <Tooltip title={reward} key={`${reward}-${ind}`}>
                  <Image
                    src={COMBINED_REWARDS[reward] || ""}
                    alt={reward}
                    width={36}
                    height={36}
                    style={{
                      cursor: "pointer",
                    }}
                  />
                </Tooltip>
              ))}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
}
