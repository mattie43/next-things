"use client";

import useSWR from "swr";
import { SIEGE_API, SIEGE_API_TYPES } from "../siege.constants";
import { PlayersTable } from "./PlayersTable";

export const Table = ({ search }: { search: SIEGE_API_TYPES }) => {
    const url =
        search === "yearly" ? SIEGE_API.yearly(2024) : SIEGE_API[search];

    const fetcher = () => fetch(url).then((res) => res.json());
    const { isLoading, data } = useSWR([search], fetcher);
    console.log(search);

    if (isLoading) return <div>Loading...</div>;

    if (!data) return <div>No data!</div>;

    return <div>{<PlayersTable data={data} />}</div>;
};
