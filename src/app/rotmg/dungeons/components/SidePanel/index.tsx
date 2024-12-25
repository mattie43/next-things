import { Button } from "@mui/material";
import useSettings from "@/app/rotmg/dungeons/useSettings.hook";
import ShowNamesSwitch from "./ShowNamesSwitch";
import HideCompletedSwitch from "./HideCompletedSwitch";
import SortBy from "./SortBy";
import RotmgTabs from "./RotmgTabs";
import ShowDifficultySwitch from "./ShowDifficultySwitch";

export default function SidePanel() {
  const { setSettings } = useSettings();

  const handleReset = () => {
    setSettings((prev) => ({ ...prev, crossedDungeons: [] }));
  };

  return (
    <div className="h-screen border-r-2 border-slate-500 flex flex-col items-center p-4 gap-4">
      <RotmgTabs />
      <ShowNamesSwitch />
      <ShowDifficultySwitch />
      <HideCompletedSwitch />
      <SortBy />
      <Button size="small" onClick={handleReset}>
        Reset Dungeons
      </Button>
    </div>
  );
}
