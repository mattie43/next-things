"use client";

export function debounce(fn: Function, delay: number) {
    let timeoutId: NodeJS.Timeout | null = null;

    return function (this: any, ...args: any) {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}
