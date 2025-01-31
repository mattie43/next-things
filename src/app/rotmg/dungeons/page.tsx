"use client";

import TypeSort from "@/app/rotmg/components/TypeSort";
import ByFameBonusSort from "@/app/rotmg/components/ByFameBonusSort";
import useSettings from "@/app/rotmg/useSettings.hook";
import OtherSort from "@/app/rotmg/components/OtherSort";
import Infobox from "../components/Infobox";

export default function page() {
  const { settings } = useSettings();

  const id = settings.sortBy.id;
  const showGuides = settings.showGuides;

  const info =
    "Clicking on a dungeon name will bring you to the wiki page. Clicking on a dungeon image will 'mark' it as completed. Open settings in the toolbar to check out more options.";

  return (
    <div className="flex flex-col h-full w-full">
      {showGuides && <Infobox info={info} />}
      {id === "type" && <TypeSort />}
      {id === "fame" && <ByFameBonusSort />}
      {id === "alphabetical" && <OtherSort type={id} />}
      {id === "difficulty" && <OtherSort type={id} />}
    </div>
  );
}
