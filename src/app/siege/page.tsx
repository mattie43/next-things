"use server";

import { SIEGE_API_TYPES } from "./siege.constants";
import { Nav } from "./components/Nav";
import { Table } from "./components/Table";

export default async function page({
    searchParams,
}: {
    searchParams: { search: SIEGE_API_TYPES };
}) {
    const search = searchParams.search || "players";

    return (
        <div
            style={{
                padding: "0 15vw",
            }}
        >
            <Nav search={search} />
            <Table search={search} />
        </div>
    );
}
