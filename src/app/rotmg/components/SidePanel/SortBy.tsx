"use client";

import { Autocomplete, TextField } from "@mui/material";
import useSettings, { sortItems } from "@/app/rotmg/useSettings.hook";

export default function SortBy() {
  const { settings, setSettings } = useSettings();

  const handleChange = (
    _: React.SyntheticEvent,
    newValue: { id: string; label: string }
  ) => {
    setSettings((prev) => ({ ...prev, sortBy: newValue }));
  };

  return (
    <Autocomplete
      value={settings.sortBy}
      options={sortItems}
      sx={{ width: 230 }}
      renderInput={(params) => <TextField {...params} label="Sort by" />}
      onChange={handleChange}
      size="small"
      disableClearable
    />
  );
}
