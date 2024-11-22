"use client";

export const useStorage = (type: "local" | "session" = "local") => {
    const storageType = type === "local" ? "localStorage" : "sessionStorage";

    const get = (key: string) => {
        if (typeof window === "undefined") {
            console.error("Window is undefined.");
            return null;
        }
        const resp = window?.[storageType]?.getItem(key);
        return resp ? JSON.parse(resp) : null;
    };

    const set = (key: string, value: any) => {
        if (typeof window === "undefined") {
            return console.error("Window is undefined.");
        }
        window?.[storageType]?.setItem(key, JSON.stringify(value));
    };

    const remove = (key: string) => {
        if (typeof window === "undefined") {
            return console.error("Window is undefined.");
        }
        window?.[storageType]?.removeItem(key);
    };

    return { get, set, remove };
};
