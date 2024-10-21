import Image from "next/image";
import { generateRandomString } from "@/helpers";
import { Avatar, IconButton, Typography } from "@mui/material";
import { MoreVert, Verified } from "@mui/icons-material";
import { pastelColors } from "@/constants";

export const Thumbnail = async ({ ind }: { ind: number }) => {
    const url = `https://dog.ceo/api/breeds/image/random`;
    const data = await fetch(url).then((resp) => resp.json());

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                maxWidth: "375px",
                maxHeight: "325px",
                gap: "8px",
            }}
        >
            <Image
                src={""}
                width={375}
                height={210}
                alt="Thumbnail"
                style={{
                    borderRadius: "8px",
                    border: "1px solid var(--white)",
                }}
            />
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "8px",
                    alignItems: "center",
                }}
            >
                <Avatar
                    sx={{
                        width: "32px",
                        height: "32px",
                        fontSize: "22px",
                        bgcolor: pastelColors[ind % pastelColors.length],
                    }}
                >
                    {generateRandomString(1).slice(0, 2)}
                </Avatar>
                <Typography
                    fontSize={18}
                    sx={{
                        display: "-webkit-box",
                        overflow: "hidden",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        textOverflow: "ellipsis",
                    }}
                >
                    {generateRandomString(8)}
                </Typography>
                <IconButton>
                    <MoreVert sx={{ height: "20px", width: "20px" }} />
                </IconButton>
            </div>
            <div style={{ marginLeft: "38px" }}>
                <Typography
                    fontSize={14}
                    color="rgba(250, 250, 250, 0.7)"
                    sx={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                    Username <Verified sx={{ fontSize: "14px" }} />
                </Typography>
                <Typography fontSize={14} color="rgba(250, 250, 250, 0.7)">
                    {"1.4k views • 1 hour(s) ago"}
                </Typography>
            </div>
        </div>
    );
};
