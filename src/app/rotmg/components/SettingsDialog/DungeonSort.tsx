import { MenuItem, Select, Typography } from "@mui/material";
import useSettings, { sortItems } from "@/app/rotmg/useSettings.hook";

export default function DungeonSort() {
  const { settings, setSettings } = useSettings();

  const handleChange = (e: any) => {
    const value: any = sortItems.find((item) => item.id === e.target.value);
    setSettings((prev) => ({ ...prev, sortBy: value }));
  };

  return (
    <div>
      <Typography variant="caption">Sort dungeons by: </Typography>
      <Select
        value={settings.sortBy.id}
        onChange={handleChange}
        size="small"
        sx={{ fontSize: "small", width: "150px" }}
      >
        {sortItems.map((item) => (
          <MenuItem key={item.id} value={item.id} sx={{ fontSize: "small" }}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
}
