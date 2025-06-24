"use client";

import { useEffect, useState } from "react";

type SetCache = (val: number | ((prev: number) => number)) => void;

// Module-scope starting value
let __cache = 0;
// Array of subscribed callbacks
let __subscribers: ((val: number) => void)[] = [];

export default function useCache() {
  const [cache, __setCache] = useState<number>(0);

  useEffect(() => {
    const __callback = (val: number) => __setCache(val);
    __subscribers.push(__callback);

    return () => {
      __subscribers = __subscribers.filter((s) => s !== __callback);
    };
  }, []);

  const setCache: SetCache = (valOrFn) => {
    const nextVal =
      typeof valOrFn === "function"
        ? (valOrFn as (prev: number) => number)(__cache)
        : valOrFn;

    __cache = nextVal;
    __subscribers.forEach((s) => s(__cache));
  };

  return [cache, setCache] as [number, SetCache];
}
