"use client";

import SidePanel from "./components/SidePanel";
import SingleDungeon from "./components/SingleDungeon";
import { ROTMG_REALM_DUNGEONS } from "./rotmgDungeons.constants";

export default function page() {
  return (
    <div>
      <SidePanel />
      <div>
        {ROTMG_REALM_DUNGEONS.map((dung, i) => (
          <SingleDungeon key={i} index={i} dung={dung} />
        ))}
      </div>
    </div>
  );
}
