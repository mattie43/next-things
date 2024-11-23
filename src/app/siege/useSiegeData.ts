import useSWR from "swr";
import { TPlayer, TSiegeDataApiResp } from "./siege.types";
import { useState } from "react";

export const useSiegeData = (type: "players" | "yearly" | "matches") => {
    const url = `https://website-siege.fly.dev/athena/${type}`;
    const [searchText, setSearchText] = useState("");

    const fetcher = () => fetch(url).then((res) => res.json());

    const { data, isLoading } = useSWR<TSiegeDataApiResp>(
        ["siege-data", type],
        fetcher,
        {
            revalidateIfStale: false,
            revalidateOnFocus: false,
        }
    );

    const filter = (player: TPlayer) => {
        if (player?.name?.toLowerCase().includes(searchText?.toLowerCase())) {
            return true;
        }
        if (player?.ign?.toLowerCase().includes(searchText?.toLowerCase())) {
            return true;
        }
        return false;
    };

    const combined = data?.players?.map((player) => ({
        ...player,
        stats: data?.stats?.[player.id],
    }));

    const players = combined?.filter(filter);

    return { data, isLoading, players, setSearchText };
};
