"use client";

import useSettings from "@/app/rotmg/useSettings.hook";
import { Switch, Typography } from "@mui/material";

export default function ShowInfoTipSwitch() {
  const { settings, setSettings } = useSettings();

  const handleChange = () => {
    setSettings((prev) => ({ ...prev, showInfoTip: !prev.showInfoTip }));
  };

  return (
    <div className="flex gap-2 items-center">
      <Typography variant="caption" className="whitespace-nowrap">
        Show page guide
      </Typography>
      <Switch checked={settings.showInfoTip} onChange={handleChange} />
    </div>
  );
}
