"use client";

import useSettings from "@/app/rotmg/useSettings.hook";
import Infobox from "@/app/rotmg/components/Infobox";
import QuestDaily from "@/app/rotmg/components/QuestDaily";
import DungeonDaily from "@/app/rotmg/components/DungeonDaily";
import { Typography } from "@mui/material";

export default function page() {
  const { settings } = useSettings();
  const quests = settings.dailyQuestList;
  const dungeons = settings.dailyDungeonList;
  const showGuide = settings.showGuides;

  const info =
    "Select tinkerer quests or dungeons from the side panel to start tracking them. Clicking on a mark will 'mark' it as collected. Clicking on a dungeon name will bring you to the wiki page. Clicking on the 'X' will remove the item from the list.";

  return (
    <div className="flex flex-col h-full w-full">
      {showGuide && <Infobox info={info} />}
      <div className="flex flex-1 overflow-auto p-2 gap-2 justify-center">
        <div className="flex flex-col w-1/2 gap-2 max-w-[700px]">
          <Typography
            sx={{
              borderBottom: "2px solid rgb(100, 116, 139)",
              width: "fit-content",
              alignSelf: "center",
            }}
          >
            Quests
          </Typography>
          {quests?.map((quest, index) => (
            <QuestDaily key={quest.id} quest={quest} index={index} />
          ))}
        </div>
        <div className="flex flex-col w-1/2 gap-2 max-w-[700px]">
          <Typography
            sx={{
              borderBottom: "2px solid rgb(100, 116, 139)",
              width: "fit-content",
              alignSelf: "center",
            }}
          >
            Dungeons
          </Typography>
          {dungeons?.map((dung, ind) => (
            <DungeonDaily key={ind} dung={dung} index={ind} />
          ))}
        </div>
      </div>
    </div>
  );
}
