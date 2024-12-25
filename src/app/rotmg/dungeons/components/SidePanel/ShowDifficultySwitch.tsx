"use client";

import useSettings from "@/app/rotmg/dungeons/useSettings.hook";
import { Switch, Typography } from "@mui/material";

export default function ShowDifficultySwitch() {
  const { settings, setSettings } = useSettings();

  const handleChange = () => {
    setSettings((prev) => ({ ...prev, showDifficulty: !prev.showDifficulty }));
  };

  return (
    <div className="flex gap-2 items-center">
      <Typography variant="caption" className="whitespace-nowrap">
        Show difficulty
      </Typography>
      <Switch checked={settings.showDifficulty} onChange={handleChange} />
    </div>
  );
}
