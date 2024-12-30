import Image from "next/image";
import realmMapKeyPNG from "@/app/rotmg/dungeons/imgs/realm_map_key.png";

export default function MapPanel() {
  return (
    <div className="overflow-auto">
      <Image src={realmMapKeyPNG} alt="realm map" height={790} width={471} />
    </div>
  );
}
