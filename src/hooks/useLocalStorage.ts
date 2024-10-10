"use client";

export const useLocalStorage = () => {
    const get = (key: string) => {
        if (typeof window === "undefined") {
            return null;
        }
        const resp = window?.localStorage?.getItem(key);
        return resp ? JSON.parse(resp) : null;
    };

    const set = (key: string, value: any) => {
        window?.localStorage?.setItem(key, JSON.stringify(value));
    };

    return { get, set };
};
