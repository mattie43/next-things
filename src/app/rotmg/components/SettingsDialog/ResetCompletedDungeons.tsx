import { Button } from "@mui/material";
import useSettings from "@/app/rotmg/useSettings.hook";

export default function ResetCompletedDungeons() {
  const { setSettings } = useSettings();

  const handleReset = () => {
    setSettings((prev) => ({ ...prev, crossedDungeons: [] }));
  };

  return (
    <Button size="small" onClick={handleReset} sx={{ fontSize: "small" }}>
      Reset completed dungeons
    </Button>
  );
}
