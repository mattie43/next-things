"use client";

import Image from "next/image";
import SidePanel from "./components/SidePanel";
import useSettings from "./useSettings.hook";
import { classImages } from "@/app/rotmg/imgs/classes/classImages";

export default function layout({ children }: { children: React.ReactNode }) {
  const { isLoading } = useSettings();
  const randNum = Math.floor(Math.random() * 17);

  if (isLoading) {
    return (
      <div className="flex flex-col flex-1 items-center justify-center">
        <Image
          src={classImages[randNum]}
          alt="loading"
          width={124}
          height={124}
        />
        Loading...
      </div>
    );
  }

  return (
    <div className="flex flex-row h-full">
      <SidePanel />
      {children}
    </div>
  );
}
