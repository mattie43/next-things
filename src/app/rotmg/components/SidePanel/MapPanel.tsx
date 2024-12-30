import { Typography } from "@mui/material";

const rookieBiomes = [
  {
    color: "#245789",
    name: "Ocean",
  },
  {
    color: "#38819E",
    name: "Low Ocean",
  },
  {
    color: "#2C7D34",
    name: "Low Forrest",
  },
  {
    color: "#B39E78",
    name: "Beach",
  },
  {
    color: "#485931",
    name: "Plains",
  },
  {
    color: "#8D8F22",
    name: "Ruins/Nature",
  },
];

const adeptBiomes = [
  {
    color: "#5F5A9B",
    name: "Haunted Hollows",
  },
  {
    color: "#BFBFBF",
    name: "Dead Church",
  },
  {
    color: "#5FD19B",
    name: "Shipwreck Cove",
  },
  {
    color: "#FF7FED",
    name: "Sprite Forest",
  },
  {
    color: "#FFB27F",
    name: "Abandoned City",
  },
  {
    color: "#FF6A00",
    name: "Risen Hell",
  },
  {
    color: "#41C1C1",
    name: "Coral Reefs",
  },
];

const veteranBiomes = [
  {
    color: "#FFF47F",
    name: "Floral Escape",
  },
  {
    color: "#B24405",
    name: "Carboniferous",
  },
  {
    color: "#FF0000",
    name: "Sanguine Forest",
  },
  {
    color: "#7FFFFF",
    name: "Runic Tundra",
  },
  {
    color: "#4874E2",
    name: "Deep Sea Abyss",
  },
];

export default function MapPanel() {
  return (
    <div className="flex flex-col gap-1">
      <Typography className="pt-4">Rookie Biomes</Typography>
      {rookieBiomes.map((item) => (
        <div className="flex flex-row gap-2">
          <div
            style={{
              height: "24px",
              width: "48px",
              background: item.color,
            }}
          />
          <div>{item.name}</div>
        </div>
      ))}
      <Typography className="pt-8">Adept Biomes</Typography>
      {adeptBiomes.map((item) => (
        <div className="flex flex-row gap-2">
          <div
            style={{
              height: "24px",
              width: "48px",
              background: item.color,
            }}
          />
          <div>{item.name}</div>
        </div>
      ))}
      <Typography className="pt-8">Veteran Biomes</Typography>
      {veteranBiomes.map((item) => (
        <div className="flex flex-row gap-2">
          <div
            style={{
              height: "24px",
              width: "48px",
              background: item.color,
            }}
          />
          <div>{item.name}</div>
        </div>
      ))}
    </div>
  );
}
