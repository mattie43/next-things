"use client";

import { Switch, Typography } from "@mui/material";
import useLocalStorage from "@/hooks/useLocalStorage";

export default function ShowNamesSwitch() {
  const { data, setData } = useLocalStorage("show-dugneon-names", true);

  return (
    <div className="flex gap-2 items-center">
      <Typography variant="caption" className="whitespace-nowrap">
        Show names
      </Typography>
      <Switch checked={data} onChange={() => setData(!data)} />
    </div>
  );
}
