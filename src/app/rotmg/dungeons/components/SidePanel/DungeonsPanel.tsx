import { Button } from "@mui/material";
import HideCompletedSwitch from "./HideCompletedSwitch";
import ShowDifficultySwitch from "./ShowDifficultySwitch";
import ShowNamesSwitch from "./ShowNamesSwitch";
import SortBy from "./SortBy";
import useSettings from "@/app/rotmg/dungeons/useSettings.hook";

export default function DungeonsPanel() {
  const { setSettings } = useSettings();

  const handleReset = () => {
    setSettings((prev) => ({ ...prev, crossedDungeons: [] }));
  };

  return (
    <>
      <ShowNamesSwitch />
      <ShowDifficultySwitch />
      <HideCompletedSwitch />
      <SortBy />
      <Button size="small" onClick={handleReset}>
        Reset Dungeons
      </Button>
    </>
  );
}
