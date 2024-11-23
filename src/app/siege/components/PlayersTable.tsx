"use client";

import { debounce } from "@/helpers";
import { useSiegeData } from "../useSiegeData";
import { PlayerCard } from "./PlayerCard";
import { TextField } from "@mui/material";

export const PlayersTable = () => {
    const { players, setSearchText } = useSiegeData("players");

    const handleChange = (e: any) => {
        setSearchText(e?.target?.value);
    };

    if (!players) return <div>Loading...</div>;

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5em",
                height: "92%",
                width: "700px",
                margin: "auto",
            }}
        >
            <TextField onChange={debounce(handleChange, 500)} size="small" />
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5em",
                    overflow: "auto",
                }}
            >
                {players?.map((player, ind: number) => (
                    <PlayerCard key={ind} player={player} ind={ind} />
                ))}
            </div>
        </div>
    );
};
