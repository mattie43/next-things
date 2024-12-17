"use client";

import { useStorage } from "@/hooks/useStorage";
import { type ReactNode, createContext, useContext, useState } from "react";

type TRotmgOptions = {
  showDungeonNames: boolean;
  crossedDungeons: string[];
};

type TRotmgOptionsReturn = {
  options: TRotmgOptions;
  switchShowDungeonNames: VoidFunction;
  resetOptions: VoidFunction;
  addRemoveDungeon: (dungeon: string) => void;
};

const RotmgOptionsContext = createContext<any>(null);

const initialValue: TRotmgOptions = {
  showDungeonNames: true,
  crossedDungeons: [],
};

export const RotmgOptionsProvider = ({ children }: { children: ReactNode }) => {
  const { get, set } = useStorage("local");
  // Local storage checks
  const crossedDungeons = get("crossed-dungeons") ?? [];

  // Set initial value + local storage values
  const [options, setOptions] = useState<TRotmgOptions>({
    ...initialValue,
    crossedDungeons,
  });

  // Setter functions
  const switchShowDungeonNames = () => {
    setOptions((prev) => ({
      ...prev,
      showDungeonNames: !prev.showDungeonNames,
    }));
  };
  const addRemoveDungeon = (dungeon: string) => {
    const newCrossedDungeons = options.crossedDungeons?.includes?.(dungeon)
      ? options.crossedDungeons.filter((d) => d !== dungeon)
      : [...options.crossedDungeons, dungeon];

    set("crossed-dungeons", newCrossedDungeons);

    setOptions((prev) => ({
      ...prev,
      crossedDungeons: newCrossedDungeons,
    }));
  };

  // Reset options to initial value
  const resetOptions = () => {
    setOptions(initialValue);
    set("crossed-dungeons", []);
  };

  return (
    <RotmgOptionsContext.Provider
      value={{
        options,
        switchShowDungeonNames,
        resetOptions,
        addRemoveDungeon,
      }}
    >
      {children}
    </RotmgOptionsContext.Provider>
  );
};

export const useRotmgOptionsContext = (): TRotmgOptionsReturn => {
  const context = useContext(RotmgOptionsContext);

  if (!context) {
    throw new Error("Not within provider for useRotmgOptionsContext.");
  }

  return context;
};
