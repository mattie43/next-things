"use server";

import { pastelColors } from "@/constants";
import { SIEGE_API } from "@/app/siege/siege.constants";
import Link from "next/link";

export const Nav = ({ search }: { search: string }) => {
    const options = [
        {
            label: "Players Stats",
            api: SIEGE_API.players,
            type: "players",
        },
        {
            label: "Yearly Player Stats",
            api: SIEGE_API.yearly(2024),
            type: "yearly",
        },
        {
            label: "Matches",
            api: SIEGE_API.matches,
            type: "matches",
        },
        {
            label: "Competitions",
            api: SIEGE_API.competitions,
            type: "competitions",
        },
    ];

    return (
        <div
            style={{
                display: "flex",
                gap: "3em",
                justifyContent: "center",
                margin: "1em 0",
            }}
        >
            {options.map((option, ind) => (
                <Link
                    key={option.label}
                    style={{
                        color: pastelColors[ind],
                        textDecoration:
                            option.type === search ? "underline" : "none",
                    }}
                    href={`/siege?search=${option.type}`}
                >
                    {option.label}
                </Link>
            ))}
        </div>
    );
};
