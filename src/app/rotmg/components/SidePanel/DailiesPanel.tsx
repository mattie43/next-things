import { Close, Search } from "@mui/icons-material";
import { IconButton, Input, MenuItem, Typography } from "@mui/material";
import { useState } from "react";
import {
  BEGINNER_QUESTS,
  EPIC_QUESTS,
  MIGHTY_QUESTS,
  SCOUT_QUESTS,
  STRANDARD_QUESTS,
  type TDailyQuest,
} from "@/app/rotmg/dailyQuests.constants";
import { generateUID } from "@/helpers";
import {
  ROTMG_COMBINED_DUNGEONS,
  TRotmgDungeon,
} from "@/app/rotmg/rotmgDungeons.constants";
import useSettings from "@/app/rotmg/useSettings.hook";

export default function DailiesPanel() {
  const [search, setSearch] = useState("");
  const { setSettings } = useSettings();

  const handleQuestClick = (quest: TDailyQuest) => {
    const newQuest = {
      ...quest,
      id: generateUID(),
    };
    setSettings((prev) => ({
      ...prev,
      dailyQuestList: [...prev.dailyQuestList, newQuest],
    }));
  };

  const scoutQuests = SCOUT_QUESTS.filter((quest) =>
    quest.task.toLowerCase().includes(search.toLowerCase())
  );
  const beginnerQuests = BEGINNER_QUESTS.filter((quest) =>
    quest.task.toLowerCase().includes(search.toLowerCase())
  );
  const standardQuests = STRANDARD_QUESTS.filter((quest) =>
    quest.task.toLowerCase().includes(search.toLowerCase())
  );
  const mightyQuests = MIGHTY_QUESTS.filter((quest) =>
    quest.task.toLowerCase().includes(search.toLowerCase())
  );
  const epicQuests = EPIC_QUESTS.filter((quest) =>
    quest.task.toLowerCase().includes(search.toLowerCase())
  );

  const items = [
    {
      title: "Scout Quests",
      quests: scoutQuests,
    },
    {
      title: "Beginner Quests",
      quests: beginnerQuests,
    },
    {
      title: "Standard Quests",
      quests: standardQuests,
    },
    {
      title: "Mighty Quests",
      quests: mightyQuests,
    },
    {
      title: "Epic Quests",
      quests: epicQuests,
    },
  ];

  const handleDungeonClick = (dung: string) => {
    setSettings((prev) => ({
      ...prev,
      dailyDungeonList: [...prev.dailyDungeonList, dung],
    }));
  };

  const dungeons = ROTMG_COMBINED_DUNGEONS.sort((a, b) =>
    a.name.localeCompare(b.name)
  ).filter((dung) => dung.name.toLowerCase().includes(search.toLowerCase()));

  const Clear = () => {
    if (!search.length) return undefined;

    return (
      <IconButton
        onClick={() => setSearch("")}
        sx={{ height: "24px", width: "24px" }}
      >
        <Close sx={{ fontSize: "20px" }} />
      </IconButton>
    );
  };

  return (
    <div className="flex flex-col flex-1 w-[265px] overflow-hidden">
      <Input
        startAdornment={<Search fontSize="small" />}
        endAdornment={<Clear />}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ mb: 1, fontSize: "small" }}
      />
      <div className="flex flex-col flex-1 overflow-auto">
        {items.map((item) => (
          <div key={item.title}>
            <Typography
              fontSize="large"
              sx={{ m: "8px 0" }}
              hidden={!item.quests.length}
              key={item.title}
            >
              {item.title}
            </Typography>
            {item.quests.map((quest) => (
              <MenuItem
                key={quest.task}
                sx={{
                  fontSize: "small",
                  display: quest.task
                    .toLowerCase()
                    .includes(search.toLowerCase())
                    ? "default"
                    : "none",
                }}
                onClick={() => handleQuestClick(quest)}
              >
                {quest.task}
              </MenuItem>
            ))}
          </div>
        ))}
        <Typography
          fontSize="large"
          sx={{ m: "8px 0" }}
          hidden={!dungeons.length}
        >
          Dungeons
        </Typography>
        {dungeons.map((dung) => (
          <MenuItem
            key={dung.name}
            sx={{
              fontSize: "small",
              display: dung.name.toLowerCase().includes(search.toLowerCase())
                ? "default"
                : "none",
            }}
            onClick={() => handleDungeonClick(dung.name)}
          >
            {dung.name}
          </MenuItem>
        ))}
      </div>
    </div>
  );
}
