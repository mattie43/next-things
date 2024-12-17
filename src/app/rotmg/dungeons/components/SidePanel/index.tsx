import { useRotmgOptionsContext } from "@/context/rotmgOptions.context";
import { Button } from "@mui/material";
import ShowNamesSwitch from "./ShowNamesSwitch";

export default function SidePanel() {
  const { resetOptions } = useRotmgOptionsContext();

  return (
    <div className="h-screen border-r-2 border-slate-500 flex flex-col items-center p-2">
      <ShowNamesSwitch />
      <Button onClick={resetOptions}>Reset</Button>
    </div>
  );
}
