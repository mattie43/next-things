"use client";

import SidePanel from "./dungeons/components/SidePanel";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row h-full">
      <SidePanel />
      {children}
    </div>
  );
}
