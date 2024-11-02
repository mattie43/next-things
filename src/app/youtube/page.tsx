import { Suspense } from "react";
import { SideNav, Thumbnail } from "@/app/youtube/components";

export default function page() {
    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1em",
                padding: "1vh 1vw",
                overflow: "auto",
            }}
        >
            <SideNav />
            <Suspense fallback={<div>Loading...</div>}>
                {Array.from({ length: 10 }).map((item, i) => (
                    <Thumbnail key={i} ind={i} />
                ))}
            </Suspense>
        </div>
    );
}
