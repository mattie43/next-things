import { useState } from "react";
import { pastelColors } from "@/constants";

type TProps = {
    text?: string;
    ind: number;
    handleClick: () => void;
    handleBlur?: (value: string, ind: number) => void;
};

export default function Note(props: TProps) {
    const { text, ind, handleClick, handleBlur } = props;
    const [hover, setHover] = useState(false);
    const color = pastelColors[ind % 5] || "white";

    const _handleBlur = (e: any) => {
        const value = e.target.value;
        handleBlur?.(value, ind);
    };

    return (
        <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
                boxShadow: `${color} 0px 0px ${hover ? "20px" : "10px"}`,
                width: "25%",
                position: "relative",
                minHeight: "200px",
                maxHeight: "400px",
                padding: "1em",
            }}
        >
            <span
                style={{
                    position: "absolute",
                    top: "4px",
                    right: "8px",
                    cursor: "pointer",
                }}
                onClick={handleClick}
                hidden={ind === -1}
            >
                x
            </span>
            {text ? (
                <textarea
                    style={{
                        display: "flex",
                        height: "100%",
                        background: "transparent",
                        border: "none",
                        outline: "none",
                        resize: "none",
                        color: "white",
                        fontSize: "1.2rem",
                        fontWeight: "500",
                        letterSpacing: "-0.5px",
                    }}
                    defaultValue={text}
                    onBlur={_handleBlur}
                ></textarea>
            ) : (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        cursor: "pointer",
                    }}
                    onClick={handleClick}
                >
                    <span>Add a note.</span>
                </div>
            )}
        </div>
    );
}
