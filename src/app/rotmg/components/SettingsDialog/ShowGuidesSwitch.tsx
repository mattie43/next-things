"use client";

import { Switch, Typography } from "@mui/material";
import useSettings from "@/app/rotmg/useSettings.hook";

export default function HideCompletedSwitch() {
  const { settings, setSettings } = useSettings();

  const handleChange = () => {
    setSettings((prev) => ({ ...prev, showGuides: !prev.showGuides }));
  };

  return (
    <div className="flex gap-2 items-center">
      <Typography variant="caption" className="whitespace-nowrap">
        Show top of page guides
      </Typography>
      <Switch checked={settings.showGuides} onChange={handleChange} />
    </div>
  );
}
