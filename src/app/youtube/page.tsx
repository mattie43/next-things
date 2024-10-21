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
            }}
        >
            <SideNav />
            <Suspense fallback={<div>Loading...</div>}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, i) => (
                    <Thumbnail key={i} ind={i} />
                ))}
            </Suspense>
        </div>
    );
}
