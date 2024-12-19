import { Button } from "@mui/material";
import useLocalStorage from "@/hooks/useLocalStorage";
import ShowNamesSwitch from "./ShowNamesSwitch";

export default function SidePanel() {
  const { setData } = useLocalStorage("crossed-dungeons", []);

  const handleReset = () => {
    setData([]);
  };

  return (
    <div className="h-screen border-r-2 border-slate-500 flex flex-col items-center p-2">
      <ShowNamesSwitch />
      <Button onClick={handleReset}>Reset</Button>
    </div>
  );
}
