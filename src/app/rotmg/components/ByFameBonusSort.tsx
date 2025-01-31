import { Typography } from "@mui/material";
import {
  ROTMG_COMBINED_DUNGEONS,
  ROTMG_DUNGEON_FAME_BONUSES,
} from "@/app/rotmg/rotmgDungeons.constants";
import SingleDungeon from "./SingleDungeon";
import { pastelColors } from "@/constants";

export default function ByFameBonusSort() {
  const getDung = (name: string) => {
    return ROTMG_COMBINED_DUNGEONS.find((dung) => dung.name === name);
  };

  return (
    <div className="overflow-auto w-full h-full p-2 items-center">
      {ROTMG_DUNGEON_FAME_BONUSES.map((item, i) => (
        <div key={item.name}>
          <Typography
            variant="body2"
            className="text-center p-2"
            style={{ color: pastelColors[i % pastelColors.length] }}
          >
            --- {item.name} {`(${item.fame} fame)`} ---
          </Typography>
          <div className="grid grid-cols-3 xl:grid-cols-5 w-full h-full p-2 items-center">
            {item.dung_list.map((_dung) => {
              const dung = getDung(_dung);
              return dung ? (
                <SingleDungeon key={dung?.name} dung={dung} />
              ) : null;
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
