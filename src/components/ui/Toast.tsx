"use client";

import { useEffect, useRef } from "react";

type TProps = {
    showToast: string;
    setShowToast: (value: string) => void;
};

export const Toast = ({ showToast, setShowToast }: TProps) => {
    const timerRef = useRef<any>(null);

    const closeToast = () => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }
        setShowToast("");
    };

    useEffect(() => {
        if (!showToast) return;
        timerRef.current = setTimeout(() => {
            closeToast();
        }, 5000);
    }, [showToast]);

    return (
        <>
            {showToast && (
                <div className="toast">
                    <span>
                        {showToast}
                        <button data-dense onClick={closeToast}>
                            x
                        </button>
                    </span>
                    <div />
                </div>
            )}
        </>
    );
};
