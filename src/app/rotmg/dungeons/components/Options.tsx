"use client";

import { Button, Switch, Typography } from "@mui/material";
import { useState } from "react";

export default function Options({ setResetCrossed }: any) {
  const [options, setOptions] = useState({
    showDungeonNames: true,
  });

  return (
    <div>
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
      <Button onClick={() => setResetCrossed(true)}>Reset</Button>
    </div>
  );
}
