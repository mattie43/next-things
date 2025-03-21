"use client";

import gh from "@/imgs/github-white.png";
import li from "@/imgs/linkedin.png";
import em from "@/imgs/gmail.png";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Snackbar } from "@/ui";

export const MyLinks = () => {
  const snackbarRef = useRef<{ open: (message: string) => void }>(null);

  const copyEmail = () => {
    navigator.clipboard.writeText("mattericksen93@gmail.com");

    snackbarRef.current?.open("Copied to clipboard!");
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
          src={em}
          width={42}
          height={42}
          alt="Copy Email"
          onClick={copyEmail}
        />
      </div>
      <button onClick={() => snackbarRef.current?.open("new msg")}>open</button>
      <Snackbar snackbarRef={snackbarRef} />
      <Snackbar snackbarRef={snackbarRef} />
    </div>
  );
};
