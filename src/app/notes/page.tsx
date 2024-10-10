"use client";

import { useState } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import Note from "./components/Note";

export default function page() {
    const { get, set } = useLocalStorage();
    const [notes, setNotes] = useState<string[]>(get("notes") || []);

    const handleClick = (ind: number) => {
        if (ind === -1) {
            setNotes((prev) => [...prev, "Edit me."]);
        } else {
        }
    };

    const handleDelete = (ind: number) => {
        const newNotes = [...notes];
        newNotes.splice(ind, 1);
        setNotes(newNotes);
        set("notes", newNotes);
    };

    const handleBlur = (value: string, ind: number) => {
        const newNotes = [...notes];
        newNotes[ind] = value;
        setNotes(newNotes);
        set("notes", newNotes);
    };

    return (
        <div
            style={{
                display: "flex",
                gap: "1em",
                flexWrap: "wrap",
            }}
        >
            {notes.map((note, ind) => (
                <Note
                    key={`${Date.now()}-${ind}`}
                    text={note}
                    ind={ind}
                    handleClick={() => handleDelete(ind)}
                    handleBlur={handleBlur}
                />
            ))}
            {notes.length < 9 && (
                <Note ind={-1} handleClick={() => handleClick(-1)} />
            )}
        </div>
    );
}
