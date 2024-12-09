"use client";

import { Switch, Typography } from "@mui/material";
import { useState } from "react";

export default function Options() {
  const [options, setOptions] = useState({
    showDungeonNames: true,
    allowCrossedOutDungeons: true,
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minWidth: "240px",
        borderRight: "1px solid #ccc",
      }}
    >
      <div>
        <Typography variant="caption">Show names</Typography>
        <Switch
          value={options.showDungeonNames}
          onChange={() =>
            setOptions((prev) => ({
              ...prev,
              showDungeonNames: !prev.showDungeonNames,
            }))
          }
        />
      </div>
      <div>
        <Typography variant="caption">Allow crossing</Typography>
        <Switch
          value={options.allowCrossedOutDungeons}
          onChange={() =>
            setOptions((prev) => ({
              ...prev,
              allowCrossedOutDungeons: !prev.allowCrossedOutDungeons,
            }))
          }
        />
      </div>
    </div>
  );
}
