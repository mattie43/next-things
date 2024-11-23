"use client";

import { Card, CircularProgress } from "@mui/material";
import { MyCard } from "./MyCard";
import { useUsers } from "../useUsers";
import { throttle } from "@/helpers";
import Link from "next/link";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useRef } from "react";

export const TanstackScroller = () => {
    const { users, isLoading, isValidating, setSize, firstLoad } = useUsers();
    const parentRef = useRef<HTMLDivElement>(null);

    const handleIntersect = () => {
        if (isLoading || isValidating) return;
        setSize((size) => size + 1);
    };

    const rowVirtualizer = useVirtualizer({
        count: users?.length || 0,
        getScrollElement: () => parentRef.current,
        estimateSize: () => 100,
        overscan: 1,
    });

    const Loader = () => (
        <div
            id="loader"
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
                href="https://tanstack.com/virtual/latest"
                style={{
                    textDecoration: "underline",
                    marginBottom: "12px",
                }}
                target="_blank"
            >
                tanstack scroller
            </Link>
            <Card sx={{ overflow: "auto", height: "700px" }} ref={parentRef}>
                {firstLoad ? (
                    <Loader />
                ) : (
                    <div
                        style={{
                            height: `${rowVirtualizer.getTotalSize()}px`,
                            width: "350px",
                            position: "relative",
                        }}
                    >
                        {rowVirtualizer.getVirtualItems().map((virtualRow) => {
                            const isLoaderRow =
                                virtualRow.index > users!.length - 2;
                            const post = users?.[virtualRow.index];

                            if (isLoaderRow) {
                                throttle(handleIntersect, 1000);
                            }

                            return (
                                <div
                                    key={virtualRow.index}
                                    style={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        height: `${virtualRow.size}px`,
                                        transform: `translateY(${virtualRow.start}px)`,
                                    }}
                                >
                                    {post && (
                                        <MyCard
                                            item={post}
                                            ind={virtualRow.index}
                                        />
                                    )}
                                    {isLoaderRow && <Loader />}
                                </div>
                            );
                        })}
                    </div>
                )}
            </Card>
        </div>
    );
};
