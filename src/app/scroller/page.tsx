import { Scroller } from "./components/Scroller";

export default function page() {
    return (
        <div
            style={{
                display: "flex",
                height: "100vh",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Scroller />
        </div>
    );
}
