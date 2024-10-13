"use client";

import { useState } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { AddTimezone, Clock } from "@/components";

export default function page() {
    const { get, set } = useLocalStorage();
    const [timezones, setTimezones] = useState<string[]>(
        get("timezones") || []
    );
    const [triggerTimeUpdate, setTriggerTimeUpdate] = useState(0);

    const handleAdd = (name: string, tz: string) => {
        setTimezones((prev) => [...prev, `${name}-${tz}`]);
    };

    const handleDelete = (ind: number) => {
        const newTimezones = [...timezones];
        newTimezones.splice(ind, 1);
        setTimezones(newTimezones);
        // set("timezones", newTimezones);
    };

    setTimeout(() => {
        setTriggerTimeUpdate((prev) => (prev += 1));
    }, 1000);

    return (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1em" }}>
            {timezones.map((date, ind) => (
                <Clock
                    key={ind}
                    ind={ind}
                    date={date}
                    handleDelete={() => handleDelete(ind)}
                    triggerTimeUpdate={triggerTimeUpdate}
                />
            ))}
            <AddTimezone handleAdd={handleAdd} />
        </div>
    );
}
