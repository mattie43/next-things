"use client";

import { InfoOutlined } from "@mui/icons-material";
import { Typography } from "@mui/material";
import TypeSort from "@/app/rotmg/components/TypeSort";
import ByFameBonusSort from "@/app/rotmg/components/ByFameBonusSort";
import useSettings from "@/app/rotmg/useSettings.hook";
import OtherSort from "@/app/rotmg/components/OtherSort";

export default function page() {
  const { settings } = useSettings();

  const id = settings.sortBy.id;
  const showInfoTip = settings.showInfoTip;

  return (
    <div className="flex flex-col h-full w-full">
      {showInfoTip && (
        <div className="flex flex-col items-center text-center gap-1 p-4 w-6/12 m-auto">
          <InfoOutlined fontSize="small" />
          <Typography fontSize="small">
            Clicking on a dungeon name will bring you to the wiki page. Clicking
            on a dungeon image will mark it as completed. Use the options on the
            left panel to arrange the dungeons. All items are saved locally, so
            you can come back to this page at any time.
          </Typography>
        </div>
      )}
      {id === "type" && <TypeSort />}
      {id === "fame" && <ByFameBonusSort />}
      {id === "alphabetical" && <OtherSort type={id} />}
      {id === "difficulty" && <OtherSort type={id} />}
    </div>
  );
}
