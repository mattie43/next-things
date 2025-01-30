"use client";

import useSettings from "@/app/rotmg/useSettings.hook";
import { Switch, Typography } from "@mui/material";

export default function ShowNamesSwitch() {
  const { settings, setSettings } = useSettings();

  const handleChange = () => {
    setSettings((prev) => ({ ...prev, showNames: !prev.showNames }));
  };

  return (
    <div className="flex gap-2 items-center">
      <Typography variant="caption" className="whitespace-nowrap">
        Show dungoeon names
      </Typography>
      <Switch checked={settings.showNames} onChange={handleChange} />
    </div>
  );
}
