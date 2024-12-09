import Options from "./components/Options";
import SingleDungeon from "./components/SingleDungeon";
import { ROTMG_REALM_DUNGEONS } from "./rotmgDungeons.constants";

export default function page() {
  return (
    <div
      style={{
        display: "flex",
        height: "100%",
      }}
    >
      <Options />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          overflow: "auto",
          height: "100%",
        }}
      >
        {ROTMG_REALM_DUNGEONS.map((dung, i) => (
          <SingleDungeon key={i} index={i} name={dung.name} />
        ))}
      </div>
    </div>
  );
}
