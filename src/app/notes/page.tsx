"use client";

import { pastelColors } from "@/constants";
import { useState } from "react";
import Note from "./components/Note";

const startingNotes = [
    "This is a note.",
    "This is another note.",
    "This is a third note.",
    "This is a fourth note.",
    "This is a fifth note.",
];

export default function page() {
    const [notes, setNotes] = useState<string[]>(startingNotes);

    const handleClick = (ind: number) => {
        console.log("ind: ", ind);
        if (ind === -1) {
            setNotes((prev) => [...prev, "Edit me."]);
        } else {
        }
    };

    const handleDelete = (ind: number) => {
        console.log("ind: ", ind);
        const newNotes = [...notes];
        newNotes.splice(ind, 1);
        setNotes(newNotes);
    };

    return (
        <div
            style={{
                display: "flex",
                gap: "1em",
                flexWrap: "wrap",
            }}
        >
            {notes.map((note, i) => (
                <Note
                    key={note}
                    text={note}
                    color={pastelColors[i % 5]}
                    handleClick={() => handleClick(i)}
                    handleDelete={() => handleDelete(i)}
                />
            ))}
            <Note color="white" handleClick={() => handleClick(-1)} />
        </div>
    );
}
