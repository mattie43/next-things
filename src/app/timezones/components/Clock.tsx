"use client";

import { useState } from "react";
import { pastelColors } from "@/constants";

type TProps = {
    ind: number;
    date: string;
};

export default function Clock({ ind, date }: TProps) {
    const color = pastelColors[ind % 5];
    const [name, tz] = date.split("-");
    const newDate = () => {
        const _date = new Date(); // Current local date and time

        const formattedDate = _date.toLocaleString("en-US", {
            timeZone: tz,
        });

        return new Date(formattedDate);
    };
    const [time, setTime] = useState<Date>(newDate());

    setTimeout(() => {
        setTime(newDate());
    }, 1000);

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
            }}
        >
            <h3 style={{ margin: 0 }}>{name}</h3>
            <span>{time.toLocaleDateString()}</span>
            <span>{time.toLocaleTimeString()}</span>
        </div>
    );
}
