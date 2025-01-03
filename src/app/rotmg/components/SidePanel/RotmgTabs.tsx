"use client";

import { Tab, Tabs } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";

export default function RotmgTabs() {
  const path = usePathname();
  const router = useRouter();

  const handleChange = (_: any, newVal: string) => {
    router.push(newVal);
  };

  return (
    <Tabs value={path} onChange={handleChange}>
      <Tab
        label="Dungeons"
        value="/rotmg/dungeons"
        sx={{ fontSize: ".8rem" }}
      />
      <Tab label="Map" value="/rotmg/map" sx={{ fontSize: ".8rem" }} />
      <Tab
        label="Event Tracker"
        value="/rotmg/events"
        disabled
        sx={{ fontSize: ".8rem" }}
      />
    </Tabs>
  );
}
