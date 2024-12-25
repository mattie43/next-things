"use client";

import TypeSort from "./components/TypeSort";
import ByFameBonusSort from "./components/ByFameBonusSort";
import useSettings from "./useSettings.hook";
import OtherSort from "./components/OtherSort";

export default function page() {
  const { settings } = useSettings();

  const id = settings.sortBy.id;

  return (
    <div className="flex flex-row h-full w-full">
      {id === "type" && <TypeSort />}
      {id === "fame" && <ByFameBonusSort />}
      {id === "alphabetical" && <OtherSort type={id} />}
      {id === "difficulty" && <OtherSort type={id} />}
    </div>
  );
}
