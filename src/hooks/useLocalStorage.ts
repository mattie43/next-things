"use client";

export const useLocalStorage = () => {
    const get = (key: string) => {
        const resp = window?.localStorage?.getItem(key);
        return resp ? JSON.parse(resp) : null;
    };

    const set = (key: string, value: any) => {
        window?.localStorage?.setItem(key, JSON.stringify(value));
    };

    return { get, set };
};
