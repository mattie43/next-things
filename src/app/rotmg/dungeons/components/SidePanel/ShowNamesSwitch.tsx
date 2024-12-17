"use client";

import { useRotmgOptionsContext } from "@/context/rotmgOptions.context";
import { Switch, Typography } from "@mui/material";

export default function ShowNamesSwitch() {
  const { options, switchShowDungeonNames } = useRotmgOptionsContext();

  return (
    <div className="flex gap-2 items-center">
      <Typography variant="caption" className="whitespace-nowrap">
        Show names
      </Typography>
      <Switch
        checked={options.showDungeonNames}
        onChange={switchShowDungeonNames}
      />
    </div>
  );
}
