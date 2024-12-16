"use client";

import { Button, Switch, Typography } from "@mui/material";
import { useState } from "react";

export default function Options({ setResetCrossed }: any) {
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
        padding: "0 8px",
      }}
    >
      <div>
        <Typography variant="caption">Show names</Typography>
        <Switch
          checked={options.showDungeonNames}
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
          checked={options.allowCrossedOutDungeons}
          onChange={() =>
            setOptions((prev) => ({
              ...prev,
              allowCrossedOutDungeons: !prev.allowCrossedOutDungeons,
            }))
          }
        />
      </div>
      <Button onClick={() => setResetCrossed(true)}>Reset</Button>
    </div>
  );
}
