const SIEGE_API_ROOT = "https://website-siege.fly.dev/athena";

export type SIEGE_API_TYPES =
    | "root"
    | "players"
    | "yearly"
    | "matches"
    | "competitions";

export const SIEGE_API = {
    root: SIEGE_API_ROOT,
    players: `${SIEGE_API_ROOT}/players`,
    yearly: (year: number) => `${SIEGE_API_ROOT}/years/${year}`,
    matches: `${SIEGE_API_ROOT}/matches?tab=results`,
    competitions: `${SIEGE_API_ROOT}/competitions`,
};
