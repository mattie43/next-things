"use client";

import { StreamComponent } from "@/components/Stream";
import { Button } from "@/ui";
import { openDialog } from "../../components/Stream";

export default function page() {
  const handleClick = () => {
    openDialog();
  };

  return (
    <div className="flex justify-center items-center h-full w-full">
      <StreamComponent items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
      <Button onClick={handleClick}>testing</Button>
    </div>
  );
}
