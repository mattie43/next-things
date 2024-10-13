"use client";

import { Dropdown } from "@/components/Dropdown";
import { useState } from "react";

type TProps = {
    handleAdd: (name: string, tz: string) => void;
};

export const AddTimezone = ({ handleAdd }: TProps) => {
    const allTimezones = Intl.supportedValuesOf("timeZone");
    const localTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const [name, setTzName] = useState("Local");
    const [selectedTz, setSelectedTz] = useState(localTz);

    const _handleAdd = () => {
        handleAdd(name, selectedTz);
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                justifyContent: "center",
            }}
        >
            <input
                defaultValue={name}
                onChange={(e) => setTzName(e.target.value)}
            />
            <Dropdown
                options={allTimezones}
                selectedOption={selectedTz}
                setSelectedOption={setSelectedTz}
            />
            <button onClick={_handleAdd}>Add timezone</button>
        </div>
    );
};
