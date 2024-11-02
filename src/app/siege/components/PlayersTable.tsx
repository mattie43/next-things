import { TPlayer } from "../siege.types";

export const PlayersTable = ({ data }: any) => {
    const players = data.players;
    console.log("!@#!@#", data);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "1em",
                overflow: "auto",
                height: "100%",
            }}
        >
            {players?.map((player: TPlayer, ind: number) => (
                <div key={ind}>
                    <div>{player.ign}</div>
                    <div>{player.name}</div>
                    <div>{player.age}</div>
                </div>
            ))}
        </div>
    );
};
