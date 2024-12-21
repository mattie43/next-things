"use client";

import { Switch, Typography } from "@mui/material";
import useLocalStorage from "@/hooks/useLocalStorage";

export default function HideCompletedSwitch() {
  const { data, setData } = useLocalStorage("hide-completed", false);

  return (
    <div className="flex gap-2 items-center">
      <Typography variant="caption" className="whitespace-nowrap">
        Hide completed
      </Typography>
      <Switch checked={data ?? false} onChange={() => setData(!data)} />
    </div>
  );
}
