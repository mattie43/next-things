"use client";

import SidePanel from "./components/SidePanel";
import NormalSort from "./components/NormalSort";
import useLocalStorage from "@/hooks/useLocalStorage";
import ByFameBonusSort from "./components/ByFameBonusSort";

export default function page() {
  const { data: sortByFameBonus } = useLocalStorage("fame-bonus", false);

  return (
    <div className="flex flex-row h-screen">
      <SidePanel />
      {sortByFameBonus ? <ByFameBonusSort /> : <NormalSort />}
    </div>
  );
}
