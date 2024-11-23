export type TPlayer = {
    id: number;
    ign: string;
    stylized_name: string;
    name: string;
    age: null;
    image_url: string;
    twitter_url: string;
    twitch_url: string;
    web_url: string;
    flag: TFlag;
    stats?: TStats;
};

export type TFlag = {
    code: string;
    country: string;
    image_url: string;
};

export type TStats = {
    player_id: number;
    kd: string;
    kost: number;
    kpr: string;
    hs: number;
    ok: string;
    srv: string;
    clutches: number;
    plants: number;
    disables: number;
    map_plays: number;
    rounds: number;
    explosive_kills: number;
    rating: string;
    operators: {
        atk: TOperator;
        def: TOperator;
    };
};

export type TOperator = {
    id: number;
    side: string;
    name: string;
    logo_url: string;
    web_url: string;
};

export type TSiegeDataApiResp = {
    players: TPlayer[];
    stats: {
        [key: number]: TStats;
    };
};

export type TPlayerCombined = TPlayer & {
    stats: TStats;
};
