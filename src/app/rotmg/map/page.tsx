import { Link } from "@mui/material";
import Image from "next/image";
import realmMapPNG from "@/app/rotmg/imgs/realm_map.png";
import Infobox from "../components/Infobox";

export default function page() {
  const Links = () => (
    <div className="flex flex-col gap-1">
      <Link
        href="https://remaster.realmofthemadgod.com/?p=3688"
        target="_blank"
      >
        Map is taken from DECA blog post
      </Link>
      <Link href="https://i.imgur.com/SxZcOsu.jpeg" target="_blank">
        Imgur of the Realm rework's updated drop table
      </Link>
    </div>
  );

  return (
    <div className="flex flex-col h-full w-full">
      <Infobox info={<Links />} />
      <div className="overflow-auto p-2 w-full">
        <Image
          src={realmMapPNG}
          alt="realm map"
          height={1600}
          width={1600}
          style={{ margin: "auto" }}
        />
      </div>
    </div>
  );
}
