import { Typography } from "@mui/material";
import { BIOMES } from "@/app/rotmg/rotmgBiomes.constants";

export default function MapPanel() {
  return (
    <div className="flex flex-col gap-2 w-[220px]">
      {BIOMES.map((item) => (
        <div key={item.subheader} className="flex flex-col gap-1">
          <Typography className="py-1">{item.subheader}</Typography>
          {item.biomes.map((biome) => (
            <div className="flex flex-row gap-2" key={biome.name}>
              <div
                style={{
                  height: "24px",
                  width: "48px",
                  background: biome.color,
                }}
              />
              <div>{biome.name}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
