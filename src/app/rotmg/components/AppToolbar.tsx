import { Toolbar } from "@mui/material";
import RotmgTabs from "./RotmgTabs";
import Settings from "./Settings";

export default function AppToolbar() {
  return (
    <Toolbar className="flex border-b-2 border-slate-500">
      <div className="flex-1" />
      <RotmgTabs />
      <div className="flex-1" />
      <Settings />
    </Toolbar>
  );
}
