"use client";

import { Card, CircularProgress } from "@mui/material";
import { MyCard } from "./MyCard";
import { useUsers } from "../useUsers";
import { VariableSizeList } from "react-window";
import { throttle } from "@/helpers";
import Link from "next/link";

export const WindowScroller = () => {
    const { users, isLoading, isValidating, setSize, firstLoad } = useUsers();

    const handleIntersect = () => {
        if (isLoading || isValidating) return;
        setSize((size) => size + 1);
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

    const itemSize = (index: number) => {
        const name = `${users?.[index]?.name.first} ${users?.[index]?.name.last}`;
        // return name ? name.length * 8 : 75;
        return 100;
    };

    const Loader = () => (
        <div
            style={{
                padding: "1em",
            }}
        >
            <CircularProgress
                sx={{
                    display: "flex",
                    margin: "auto",
                }}
            />
        </div>
    );

    return (
        <div>
            <Link
                href="https://github.com/bvaughn/react-window"
                style={{
                    textDecoration: "underline",
                    marginBottom: "12px",
                }}
                target="_blank"
            >
                <span
                    style={{
                        marginBottom: "12px",
                    }}
                >
                    react-window scroller
                </span>
            </Link>
            <Card sx={{ height: "700px" }}>
                {firstLoad ? (
                    <Loader />
                ) : (
                    <VariableSizeList
                        height={700}
                        width={350}
                        itemSize={itemSize}
                        itemCount={users?.length ?? 0}
                        itemData={users}
                        onItemsRendered={({ overscanStopIndex }) => {
                            if (
                                users &&
                                overscanStopIndex >= users.length - 1
                            ) {
                                throttle(handleIntersect, 1000);
                            }
                        }}
                    >
                        {renderRow}
                    </VariableSizeList>
                )}
            </Card>
        </div>
    );
};
