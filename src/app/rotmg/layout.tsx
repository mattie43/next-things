"use client";

import Image from "next/image";
import SidePanel from "./components/SidePanel";
import AppToolbar from "./components/AppToolbar";
import useSettings from "./useSettings.hook";
import SettingsDialog from "./components/SettingsDialog";
import { classImages } from "@/app/rotmg/imgs/classes/classImages";

export default function layout({ children }: { children: React.ReactNode }) {
  const { isLoading } = useSettings();
  const minute = new Date().getMinutes();
  const randNum = minute % classImages.length;

  if (isLoading) {
    return (
      <div className="flex flex-col flex-1 items-center justify-center">
        <Image
          src={classImages[randNum]}
          priority
          alt="loading"
          width={124}
          height={124}
        />
        Loading...
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <AppToolbar />
      <div className="flex flex-row flex-1 overflow-hidden">
        <SidePanel />
        {children}
      </div>
      <SettingsDialog />
    </div>
  );
}
