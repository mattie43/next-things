import SettingsIcon from "@mui/icons-material/Settings";
import { IconButton } from "@mui/material";
import { useSettingsDialog } from "@/app/rotmg/useSettingsDialog.hook";

export default function Settings() {
  const { openDialog } = useSettingsDialog();

  return (
    <IconButton onClick={openDialog}>
      <SettingsIcon sx={{ opacity: 0.8 }} />
    </IconButton>
  );
}
