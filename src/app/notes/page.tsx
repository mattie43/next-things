"use client";

import { useState } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Note } from "@/components";

export default function page() {
    const { get, set } = useLocalStorage();
    const [notes, setNotes] = useState<string[]>(get("notes") || []);

    const addNote = () => {
        setNotes((prev) => [...prev, "Edit me."]);
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
            {notes.length < 9 && <Note ind={-1} handleClick={addNote} />}
        </div>
    );
}
