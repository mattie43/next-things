"use client";

import { useState } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { AddTimezone } from "./components/AddTimezone";
import Clock from "./components/Clock";

export default function page() {
    const { get, set } = useLocalStorage();
    const [timezones, setTimezones] = useState<string[]>(
        get("timezones") || []
    );

    const handleAdd = (name: string, tz: string) => {
        setTimezones((prev) => [...prev, `${name}-${tz}`]);
    };

    const handleDelete = (ind: number) => {
        const newTimezones = [...timezones];
        newTimezones.splice(ind, 1);
        setTimezones(newTimezones);
        set("timezones", newTimezones);
    };

    return (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1em" }}>
            {timezones.map((date, ind) => (
                <Clock key={ind} ind={ind} date={date} />
            ))}
            <AddTimezone handleAdd={handleAdd} />
        </div>
    );
}
