import { Search } from "@mui/icons-material";
import { Input, MenuItem, Typography } from "@mui/material";
import { useState } from "react";
import {
  BEGINNER_QUESTS,
  EPIC_QUESTS,
  MIGHTY_QUESTS,
  SCOUT_QUESTS,
  STRANDARD_QUESTS,
  type TDailyQuest,
} from "@/app/rotmg/dailyQuests";
import { generateUID } from "@/helpers";
import useSettings from "@/app/rotmg/useSettings.hook";

export default function DailiesPanel() {
  const [search, setSearch] = useState("");
  const { setSettings } = useSettings();

  const handleClick = (quest: TDailyQuest) => {
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

  return (
    <div className="flex flex-col flex-1 overflow-auto">
      <Input
        startAdornment={<Search fontSize="small" />}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ mb: 1, fontSize: "small" }}
      />
      <div className="flex flex-col overflow-auto">
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
                onClick={() => handleClick(quest)}
              >
                {quest.task}
              </MenuItem>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
