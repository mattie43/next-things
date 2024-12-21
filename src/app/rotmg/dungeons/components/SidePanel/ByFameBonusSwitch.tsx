"use client";

import { Switch, Typography } from "@mui/material";
import useLocalStorage from "@/hooks/useLocalStorage";

export default function ByFameBonusSwitch() {
  const { data, setData } = useLocalStorage("fame-bonus", false);

  return (
    <div className="flex gap-2 items-center">
      <Typography variant="caption" className="whitespace-nowrap">
        Sort by fame bonus
      </Typography>
      <Switch checked={data ?? false} onChange={() => setData(!data)} />
    </div>
  );
}
