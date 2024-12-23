"use client";

import { Tab, Tabs, Toolbar } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";

export default function RotmgToolbar() {
  const path = usePathname();
  const router = useRouter();

  const handleChange = (_: any, newVal: string) => {
    router.push(newVal);
  };

  return (
    <Toolbar className="border-slate-500 border-b-2">
      <Tabs value={path} onChange={handleChange} className="m-auto">
        <Tab label="Dungeons" value="/rotmg/dungeons" />
        <Tab label="Event Tracker" value="/rotmg/events" />
      </Tabs>
    </Toolbar>
  );
}
