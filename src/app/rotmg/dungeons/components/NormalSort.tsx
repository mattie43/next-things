import { pastelColors } from "@/constants";
import { Typography } from "@mui/material";
import {
  ROTMG_REALM_DUNGEONS,
  ROTMG_EVENT_DUNGEONS,
  ROTMG_WORMHOLE_DUNGEONS,
  ROTMG_ORYX_DUNGEONS,
  ROTMG_HEROIC_DUNGEONS,
  ROTMG_SPECIAL_DUNGEONS,
} from "../rotmgDungeons.constants";
import SingleDungeon from "./SingleDungeon";

export default function NormalSort() {
  return (
    <div className="overflow-auto grid grid-cols-3 xl:grid-cols-5 w-full p-2 items-center">
      <Typography
        variant="body2"
        className="text-center col-span-3 xl:col-span-5 p-2"
        style={{ color: pastelColors[0] }}
      >
        --- Realm Dungeons ---
      </Typography>
      {ROTMG_REALM_DUNGEONS.map((dung) => (
        <SingleDungeon key={dung.name} dung={dung} />
      ))}
      <Typography
        variant="body2"
        className="text-center col-span-3 xl:col-span-5 p-2"
        style={{ color: pastelColors[1] }}
      >
        --- Event Dungeons ---
      </Typography>
      {ROTMG_EVENT_DUNGEONS.map((dung) => (
        <SingleDungeon key={dung.name} dung={dung} />
      ))}
      <Typography
        variant="body2"
        className="text-center col-span-3 xl:col-span-5 p-2"
        style={{ color: pastelColors[2] }}
      >
        --- Wormhole Dungeons ---
      </Typography>
      {ROTMG_WORMHOLE_DUNGEONS.map((dung) => (
        <SingleDungeon key={dung.name} dung={dung} />
      ))}
      <Typography
        variant="body2"
        className="text-center col-span-3 xl:col-span-5 p-2"
        style={{ color: pastelColors[3] }}
      >
        --- Oryx Dungeons ---
      </Typography>
      {ROTMG_ORYX_DUNGEONS.map((dung) => (
        <SingleDungeon key={dung.name} dung={dung} />
      ))}
      <Typography
        variant="body2"
        className="text-center col-span-3 xl:col-span-5 p-2"
        style={{ color: pastelColors[4] }}
      >
        --- Heroic Dungeons ---
      </Typography>
      {ROTMG_HEROIC_DUNGEONS.map((dung) => (
        <SingleDungeon key={dung.name} dung={dung} />
      ))}
      <Typography
        variant="body2"
        className="text-center col-span-3 xl:col-span-5 p-2"
        style={{ color: pastelColors[0] }}
      >
        --- Special Dungeons ---
      </Typography>
      {ROTMG_SPECIAL_DUNGEONS.map((dung) => (
        <SingleDungeon key={dung.name} dung={dung} />
      ))}
    </div>
  );
}
