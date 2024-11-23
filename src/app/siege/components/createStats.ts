import { TStats } from "../siege.types";

const getKD = (kd?: string) => {
    if (!kd) return "0.00";
    const [a, b] = kd.split("-");
    const num = parseInt(a) / parseInt(b);
    return num.toFixed(2);
};

const getEntry = (ok?: string, kills?: boolean) => {
    if (!ok) return 0;
    const [k, d] = ok.split("-");
    const cleanDeaths = d.split(" ")[0];
    return kills ? k : cleanDeaths;
};

export const createStats = (stats?: TStats) => {
    if (!stats) return [];
    return [
        {
            label: "KD",
            value: getKD(stats.kd),
            tooltip: "Kill/Death Ratio",
        },
        {
            label: "KOST",
            value: `${stats.kost}%`,
            tooltip:
                "Kill, Objective (plant or defuse), Survive, Trade per round",
        },
        {
            label: "HS",
            value: `${stats.hs}%`,
            tooltip: "Headshot percentage",
        },
        {
            label: "KPR",
            value: stats.kpr,
            tooltip: "Kills per round",
        },
        {
            label: "OK",
            value: getEntry(stats.ok, true),
            tooltip: "Opening kills (first kill of round)",
        },
        {
            label: "OD",
            value: getEntry(stats.ok, false),
            tooltip: "Opening deaths (first death of round)",
        },
        {
            label: "SRV",
            value: `${stats.srv}%`,
            tooltip: "Round survival percentage",
        },
        {
            label: "Plants",
            value: stats.plants,
            tooltip: "Defusers planted",
        },
        {
            label: "Disables",
            value: stats.disables,
            tooltip: "Defusers disabled",
        },
        {
            label: "Maps",
            value: stats.map_plays,
            tooltip: "Maps played",
        },
        {
            label: "Rounds",
            value: stats.rounds,
            tooltip: "Rounds played",
        },
        {
            label: "EK",
            value: stats.explosive_kills,
            tooltip: "Explosive kills",
        },
    ];
};
