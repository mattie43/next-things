"use client";

import { Card } from "@mui/material";
import { MyCard } from "./MyCard";
import { useUsers } from "../useUsers";
import { useRef } from "react";
import { FixedSizeList } from "react-window";

export const Scroller = () => {
    const { users, isLoading, isValidating, setSize } = useUsers();
    const breakTimer = useRef<boolean>(false);

    const handleIntersect = async () => {
        if (isLoading || isValidating || breakTimer.current) return;
        breakTimer.current = true;
        await setSize((size) => size + 1);
        setTimeout(() => {
            breakTimer.current = false;
        }, 1000);
    };

    const renderRow = (props: any) => {
        const { data, index, style } = props;
        const item = data[index];
        return (
            <div style={style} key={index}>
                <MyCard item={item} ind={index} />
            </div>
        );
    };

    return (
        <Card sx={{ height: "80%", overflow: "auto" }}>
            <FixedSizeList
                height={750}
                width={350}
                itemSize={75}
                itemCount={users?.length ?? 0}
                itemData={users}
                onItemsRendered={({ overscanStopIndex }) => {
                    if (users && overscanStopIndex >= users.length - 1) {
                        handleIntersect();
                    }
                }}
            >
                {renderRow}
            </FixedSizeList>
        </Card>
    );
};
