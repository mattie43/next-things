"use client";

import { useState } from "react";

type TStorage = {
  key: string;
  initialValue: any;
  type?: "local" | "session";
};

type TReturnStorage = [any, (value: any) => void] | [null, null];

export const useStorage = (props: TStorage): TReturnStorage => {
  const { key, initialValue, type = "local" } = props;
  if (typeof window === "undefined") {
    console.error("Window is undefined.");
    return [null, null];
  }

  const storageType = type === "local" ? "localStorage" : "sessionStorage";
  const resp = window[storageType].getItem(key);
  const [_value, _setValue] = useState(resp ? JSON.parse(resp) : initialValue);

  const setValue = (value: any) => {
    const newValue = JSON.stringify(value);
    window[storageType].setItem(key, newValue);
    _setValue(newValue);
  };

  return [_value, setValue] as const;
};
