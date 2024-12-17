"use client";

import { ROTMG_REALM_DUNGEONS } from "./rotmgDungeons.constants";
import SidePanel from "./components/SidePanel";
import SingleDungeon from "./components/SingleDungeon";

export default function page() {
  return (
    <div className="flex flex-row h-screen">
      <SidePanel />
      <div className="overflow-auto grid grid-cols-3 xl:grid-cols-5 w-full h-full p-2">
        {ROTMG_REALM_DUNGEONS.map((dung, i) => (
          <SingleDungeon key={i} index={i} dung={dung} />
        ))}
      </div>
    </div>
  );
}
