"use client";

import { useEffect, useState } from "react";
import { pastelColors } from "@/constants";

type TProps = {
    ind: number;
    date: string;
    handleDelete: () => void;
    triggerTimeUpdate: number;
};

export const Clock = ({
    ind,
    date,
    handleDelete,
    triggerTimeUpdate,
}: TProps) => {
    const color = pastelColors[ind % 5];
    const [name, tz] = date.split("-");
    const newDate = () => {
        const _date = new Date();

        const formattedDate = _date.toLocaleString("en-US", {
            timeZone: tz,
        });

        return new Date(formattedDate);
    };
    const [time, setTime] = useState<Date>(newDate());

    useEffect(() => {
        setTime(newDate());
    }, [triggerTimeUpdate]);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "1em",
                color,
                border: `1px solid ${pastelColors[(ind + 2) % 5]}`,
                borderRadius: "4px",
                padding: "12px",
                position: "relative",
            }}
        >
            <span
                style={{
                    position: "absolute",
                    top: "4px",
                    right: "8px",
                    cursor: "pointer",
                    color: "var(--white)",
                }}
                onClick={handleDelete}
            >
                x
            </span>
            <h3 style={{ margin: 0 }}>{name}</h3>
            <span>{time.toLocaleDateString()}</span>
            <span>{time.toLocaleTimeString()}</span>
        </div>
    );
};
