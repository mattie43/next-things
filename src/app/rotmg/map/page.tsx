import { InfoOutlined } from "@mui/icons-material";
import { Link } from "@mui/material";
import Image from "next/image";
import realmMapPNG from "@/app/rotmg/imgs/realm_map.png";

export default function page() {
  return (
    <div className="flex flex-col w-full items-center gap-1 p-4 overflow-auto">
      <InfoOutlined fontSize="small" />
      <Link
        href="https://remaster.realmofthemadgod.com/?p=3688"
        target="_blank"
      >
        Images are taken from DECA blog post
      </Link>
      <Link href="https://i.imgur.com/SxZcOsu.jpeg" target="_blank">
        Realm rework updated drop table image
      </Link>
      <Image src={realmMapPNG} alt="realm map" height={1600} width={1600} />
    </div>
  );
}
