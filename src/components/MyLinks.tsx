"use client";

import gh from "@/imgs/github-white.png";
import li from "@/imgs/linkedin.png";
import gm from "@/imgs/gmail.png";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";

export const MyLinks = () => {
  const copyEmail = () => {
    toast("Copied to clipboard!");
    navigator.clipboard.writeText("mattericksen93@gmail.com");
  };

  return (
    <div className="flex gap-4 items-center">
      <Link href="https://github.com/mattie43" target="_blank">
        <Image src={gh} width={36} height={36} alt="Github" />
      </Link>
      <Link href="https://www.linkedin.com/in/matt-ericksen/" target="_blank">
        <Image src={li} width={36} height={36} alt="LinkedIn" />
      </Link>
      <div className="cursor-pointer">
        <Image
          src={gm}
          width={42}
          height={42}
          alt="Copy Email"
          onClick={copyEmail}
        />
      </div>
    </div>
  );
};
