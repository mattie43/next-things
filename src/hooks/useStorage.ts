"use client";

type TStorageType = "local" | "session";

export const useStorage = (type: TStorageType = "local") => {
  const storageType = type === "local" ? "localStorage" : "sessionStorage";

  const get = (key: string) => {
    if (typeof window === "undefined") {
      console.error("Window is undefined.");
      return null;
    }
    const resp = window[storageType].getItem(key);
    return resp ? JSON.parse(resp) : null;
  };

  const set = (key: string, value: any) => {
    if (typeof window === "undefined") {
      console.error("Window is undefined.");
      return null;
    }
    const newValue = JSON.stringify(value);
    window[storageType].setItem(key, newValue);
  };

  return { get, set };
};
