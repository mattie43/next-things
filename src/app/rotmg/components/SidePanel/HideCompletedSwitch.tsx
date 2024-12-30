"use client";

import { Switch, Typography } from "@mui/material";
import useSettings from "@/app/rotmg/useSettings.hook";

export default function HideCompletedSwitch() {
  const { settings, setSettings } = useSettings();

  const handleChange = () => {
    setSettings((prev) => ({ ...prev, hideCompleted: !prev.hideCompleted }));
  };

  return (
    <div className="flex gap-2 items-center">
      <Typography variant="caption" className="whitespace-nowrap">
        Hide completed
      </Typography>
      <Switch checked={settings.hideCompleted} onChange={handleChange} />
    </div>
  );
}
