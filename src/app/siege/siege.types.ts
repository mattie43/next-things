export type TPlayer = {
    id: number;
    ign: string;
    stylized_name: string;
    name: string;
    age: any;
    image_url: string;
    twitter_url: string;
    twitch_url: string;
    web_url: string;
    flag: TFlag;
};

export type TFlag = {
    code: string;
    country: string;
    image_url: string;
};
