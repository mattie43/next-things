import { ROTMG_COMBINED_DUNGEONS } from "../rotmgDungeons.constants";
import SingleDungeon from "./SingleDungeon";

export default function OtherSort({
  type,
}: {
  type: "alphabetical" | "difficulty";
}) {
  const dungs = ROTMG_COMBINED_DUNGEONS.sort((a, b) => {
    if (type === "alphabetical") {
      return a.name.localeCompare(b.name);
    } else {
      return a.difficulty - b.difficulty;
    }
  });

  return (
    <div className="overflow-auto grid grid-cols-3 xl:grid-cols-5 w-full p-2 items-center gap-y-2">
      {dungs.map((dung) => (
        <SingleDungeon key={dung.name} dung={dung} />
      ))}
    </div>
  );
}
