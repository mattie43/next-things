import useSettings from "@/app/rotmg/useSettings.hook";
import { options } from "@/app/rotmg/events/events";
import { Button, Checkbox, IconButton, Input, Typography } from "@mui/material";
import { Close, Search } from "@mui/icons-material";
import { useState } from "react";

export default function EventsPanel() {
  const { settings, setSettings } = useSettings();
  const [search, setSearch] = useState("");
  const items = options.filter((item) =>
    item.toLowerCase()?.includes(search.toLowerCase())
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleCheck = (name: string) => {
    const currList = settings.eventTrackerList;
    if (currList?.includes(name)) {
      setSettings((prev) => ({
        ...prev,
        eventTrackerList: currList.filter((d) => d !== name),
      }));
    } else {
      setSettings((prev) => ({
        ...prev,
        eventTrackerList: [...prev.eventTrackerList, name],
      }));
    }
  };

  const resetList = () => {
    setSettings((prev) => ({
      ...prev,
      eventTrackerList: [],
    }));
  };

  const Clear = () => {
    if (!search.length) return undefined;

    return (
      <IconButton
        onClick={() => setSearch("")}
        sx={{ height: "24px", width: "24px" }}
      >
        <Close sx={{ fontSize: "20px" }} />
      </IconButton>
    );
  };

  return (
    <div className="flex flex-col flex-1 w-[260px] overflow-hidden">
      <Input
        value={search}
        onChange={handleSearch}
        startAdornment={<Search fontSize="small" />}
        endAdornment={<Clear />}
        sx={{ fontSize: "small" }}
      />
      <Button size="small" sx={{ margin: "8px 0" }} onClick={resetList}>
        Reset selected
      </Button>
      <div className="flex flex-col flex-1 overflow-auto">
        {items.map((name) => (
          <div key={name} className="flex items-center">
            <Checkbox
              size="small"
              checked={settings.eventTrackerList?.includes(name)}
              onClick={() => handleCheck(name)}
            />
            <Typography fontSize={"small"}>{name}</Typography>
          </div>
        ))}
      </div>
    </div>
  );
}
