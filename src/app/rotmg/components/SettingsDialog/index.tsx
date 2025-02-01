import { Button, Dialog, Typography } from "@mui/material";
import { useSettingsDialog } from "@/app/rotmg/useSettingsDialog.hook";
import ShowGuidesSwitch from "./ShowGuidesSwitch";
import HideCompletedSwitch from "./HideCompletedSwitch";
import ShowDifficultySwitch from "./ShowDifficultySwitch";
import ShowNamesSwitch from "./ShowNamesSwitch";
import DungeonSort from "./DungeonSort";
import ResetCompletedDungeons from "./ResetCompletedDungeons";

export default function SettingsDialog() {
  const { isOpen, closeDialog } = useSettingsDialog();

  return (
    <Dialog open={isOpen} onClose={closeDialog}>
      <div className="flex flex-col w-[600px] items-center my-4">
        <Typography>Make a description...</Typography>
        <hr className="border-slate-500 border w-full mt-2" />
        <div className="flex flex-col gap-3 p-4">
          <ShowGuidesSwitch />
          <ShowNamesSwitch />
          <ShowDifficultySwitch />
          <HideCompletedSwitch />
          <DungeonSort />
          <ResetCompletedDungeons />
        </div>
        <Button onClick={closeDialog} size="small" sx={{ fontSize: "small" }}>
          Close [ESC]
        </Button>
      </div>
    </Dialog>
  );
}
