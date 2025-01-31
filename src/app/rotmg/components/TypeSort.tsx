import { pastelColors } from "@/constants";
import { Typography } from "@mui/material";
import {
  ROTMG_REALM_DUNGEONS,
  ROTMG_EVENT_DUNGEONS,
  ROTMG_WORMHOLE_DUNGEONS,
  ROTMG_ORYX_DUNGEONS,
  ROTMG_HEROIC_DUNGEONS,
  ROTMG_SPECIAL_DUNGEONS,
} from "@/app/rotmg/rotmgDungeons.constants";
import SingleDungeon from "@/app/rotmg/components/SingleDungeon";

const items = [
  {
    title: "Realm Dungeons",
    dungeons: ROTMG_REALM_DUNGEONS,
  },
  {
    title: "Event Dungeons",
    dungeons: ROTMG_EVENT_DUNGEONS,
  },
  {
    title: "Wormhole Dungeons",
    dungeons: ROTMG_WORMHOLE_DUNGEONS,
  },
  {
    title: "Oryx Dungeons",
    dungeons: ROTMG_ORYX_DUNGEONS,
  },
  {
    title: "Heroic Dungeons",
    dungeons: ROTMG_HEROIC_DUNGEONS,
  },
  {
    title: "Special Dungeons",
    dungeons: ROTMG_SPECIAL_DUNGEONS,
  },
];

export default function TypeSort() {
  return (
    <div className="flex flex-col overflow-auto w-full gap-2">
      {items.map((item, ind) => (
        <div key={item.title} className="flex flex-col">
          <Typography
            variant="body2"
            className="text-center p-2"
            style={{ color: pastelColors[ind % pastelColors.length] }}
          >
            --- {item.title} ---
          </Typography>
          <div className="grid grid-cols-3 xl:grid-cols-5 w-full p-2 items-center gap-y-2">
            {item.dungeons.map((dung) => (
              <SingleDungeon key={dung.name} dung={dung} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
