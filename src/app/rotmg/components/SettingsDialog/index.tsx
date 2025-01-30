import { Button, Dialog, Typography } from "@mui/material";
import { useSettingsDialog } from "@/app/rotmg/useSettingsDialog.hook";
import ShowGuidesSwitch from "./ShowGuidesSwitch";
import HideCompletedSwitch from "./HideCompletedSwitch";
import ShowDifficultySwitch from "./ShowDifficultySwitch";
import ShowNamesSwitch from "./ShowNamesSwitch";

export default function SettingsDialog() {
  const { isOpen, closeDialog } = useSettingsDialog();

  return (
    <Dialog open={isOpen} onClose={closeDialog}>
      <Typography sx={{ p: 2 }}>ROTMG Settings</Typography>
      <div className="flex flex-col gap-1 p-8">
        <ShowGuidesSwitch />
        <ShowNamesSwitch />
        <ShowDifficultySwitch />
        <HideCompletedSwitch />
      </div>
      <Button
        onClick={closeDialog}
        sx={{ m: "16px auto", width: "fit-content" }}
        size="small"
      >
        Close [ESC]
      </Button>
    </Dialog>
  );
}
