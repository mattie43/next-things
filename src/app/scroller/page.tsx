import { TanstackScroller } from "./components/TanstackScroller";
import { WindowScroller } from "./components/WindowScroller";

export default function page() {
    return (
        <div
            style={{
                display: "flex",
                height: "100vh",
                alignItems: "center",
                justifyContent: "center",
                gap: "2em",
            }}
        >
            <WindowScroller />
            <TanstackScroller />
        </div>
    );
}
