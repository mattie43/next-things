"use client";

import { useStorage } from "@/hooks/useStorage";

export const throttle = (fn: VoidFunction, delay: number) => {
    const { get, set } = useStorage("session");
    const time = Date.now();

    const last: number = get(`${fn.name}`);

    if (last && time - last < delay) {
        return;
    } else {
        set(`${fn.name}`, time);
        fn();
    }
};
