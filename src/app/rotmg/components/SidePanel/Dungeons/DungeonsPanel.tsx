import { Button } from "@mui/material";
import useSettings from "@/app/rotmg/useSettings.hook";
import HideCompletedSwitch from "./HideCompletedSwitch";
import ShowDifficultySwitch from "./ShowDifficultySwitch";
import ShowNamesSwitch from "./ShowNamesSwitch";
import SortBy from "./SortBy";
import ShowInfoTipSwitch from "./ShowInfoTipSwitch";

export default function DungeonsPanel() {
  const { setSettings } = useSettings();

  const handleReset = () => {
    setSettings((prev) => ({ ...prev, crossedDungeons: [] }));
  };

  return (
    <>
      <ShowInfoTipSwitch />
      <ShowNamesSwitch />
      <ShowDifficultySwitch />
      <HideCompletedSwitch />
      <SortBy />
      <Button size="small" onClick={handleReset}>
        Reset Completed
      </Button>
    </>
  );
}
