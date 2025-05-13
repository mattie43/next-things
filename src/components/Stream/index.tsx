"use client";

import { createContext, useContext, useEffect, useState } from "react";
import StreamCard from "./StreamCard";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/ui";

export type TStreamComponentProps = {
  items: any[];
};

const Stream = createContext<TStreamComponentProps | null>(null);

let setOpen: ((open: boolean) => void) | null = null;

export const openDialog = () => {
  setOpen?.(true);
};

export const StreamComponent = (props: TStreamComponentProps) => {
  // props
  const { items = [] } = props;

  // state
  const [_open, _setOpen] = useState<boolean>(false);

  useEffect(() => {
    setOpen = _setOpen;
  }, []);

  return (
    <Stream.Provider value={null}>
      <div className="flex flex-col gap-2 w-[400px] max-h-[600px] border-2 border-dashed border-red-500 p-2 overflow-auto">
        {items.map((_: any, i: number) => (
          <StreamCard key={i} />
        ))}
      </div>
      <Dialog open={_open} onOpenChange={_setOpen}>
        <DialogContent>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogHeader>Dialog Header</DialogHeader>
          <DialogDescription>Dialog Description</DialogDescription>
          <DialogFooter>Dialog Footer</DialogFooter>
        </DialogContent>
      </Dialog>
    </Stream.Provider>
  );
};
