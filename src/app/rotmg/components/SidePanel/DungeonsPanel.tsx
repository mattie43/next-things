import { Autocomplete, Button, TextField } from "@mui/material";
import useSettings, { sortItems } from "@/app/rotmg/useSettings.hook";

export default function DungeonsPanel() {
  const { settings, setSettings } = useSettings();

  const handleReset = () => {
    setSettings((prev) => ({ ...prev, crossedDungeons: [] }));
  };

  const handleChange = (
    _: React.SyntheticEvent,
    newValue: { id: string; label: string }
  ) => {
    setSettings((prev) => ({ ...prev, sortBy: newValue }));
  };
  return (
    <>
      <Autocomplete
        value={settings.sortBy}
        options={sortItems}
        fullWidth
        renderInput={(params) => (
          <TextField {...params} label="Sort by" size="small" />
        )}
        onChange={handleChange}
        size="small"
        disableClearable
      />
      <Button size="small" onClick={handleReset}>
        Reset Completed
      </Button>
    </>
  );
}
