import { Button } from "@mui/material";
import useLocalStorage from "@/hooks/useLocalStorage";
import ShowNamesSwitch from "./ShowNamesSwitch";
import HideCompletedSwitch from "./HideCompletedSwitch";
import ByFameBonusSwitch from "./ByFameBonusSwitch";

export default function SidePanel() {
  const { setData } = useLocalStorage("crossed-dungeons", []);

  const handleReset = () => {
    setData([]);
  };

  return (
    <div className="h-screen border-r-2 border-slate-500 flex flex-col items-center p-2">
      <ShowNamesSwitch />
      <HideCompletedSwitch />
      <ByFameBonusSwitch />
      <Button size="small" onClick={handleReset}>
        Reset
      </Button>
    </div>
  );
}
