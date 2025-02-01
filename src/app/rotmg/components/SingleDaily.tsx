import { pastelColors } from "@/constants";
import { Close } from "@mui/icons-material";
import { IconButton, Typography, Tooltip } from "@mui/material";
import { useState } from "react";
import { MARKS } from "../imgs/marks";
import { COMBINED_REWARDS } from "../imgs/rewards";
import Image from "next/image";
import useSettings from "../useSettings.hook";
import Link from "next/link";

export default function SingleDaily({ quest, index }: any) {
  const { setSettings } = useSettings();
  const [marked, setMarked] = useState<string[]>([]);

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

  const createURL = (id: string) => {
    const split = id.toLowerCase().split(" ").join("-");
    return `https://www.realmeye.com/wiki/${split}`;
  };

  return (
    <div
      key={quest.id}
      className="flex flex-col p-2 pr-10 relative"
      style={{
        border: `2px solid ${pastelColors[index % pastelColors.length]}`,
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
      <Typography fontSize="medium">Desc: {quest?.description}</Typography>
      <Typography fontSize="medium" className="flex gap-1 items-center">
        Marks:
        {quest?.marks.map((mark: string, ind: number) => (
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
        {quest?.rewards.map((reward: string, ind: number) => (
          <Tooltip title={reward} key={`${reward}-${ind}`}>
            <Link href={createURL(reward)} target="_blank">
              <Image
                src={COMBINED_REWARDS[reward] || ""}
                alt={reward}
                width={36}
                height={36}
              />
            </Link>
          </Tooltip>
        ))}
      </Typography>
    </div>
  );
}
