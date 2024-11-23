"use server";

import { SIEGE_API_TYPES } from "./siege.constants";
import { Nav } from "./components/Nav";
import { PlayersTable } from "./components/PlayersTable";
import { Tooltip } from "@mui/material";

export default async function page({
    searchParams,
}: {
    searchParams: { search: SIEGE_API_TYPES };
}) {
    const search = searchParams.search || "players";

    const Display = () => {
        switch (search) {
            case "players":
                return <PlayersTable />;
            case "yearly":
                return <>yearly</>;
            case "matches":
                return <>matches</>;
            case "competitions":
                return <>competitions</>;
            default:
                return <PlayersTable />;
        }
    };

    return (
        <div
            style={{
                paddingRight: "10vw",
                height: "100%",
            }}
        >
            <Nav search={search} />
            <Display />
        </div>
    );
}
