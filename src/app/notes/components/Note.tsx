import { useState } from "react";

export default function Note({
    text,
    color,
    handleClick,
    handleDelete,
}: {
    text?: string;
    color: string;
    handleClick: () => void;
    handleDelete?: () => void;
}) {
    const _handleClick = (e: any, type?: string) => {
        e.stopImmediatePropagation?.();
        e.stopPropagation?.();
        if (type === "click") handleClick();
        else handleDelete?.();
    };
    const [currText, setCurrText] = useState(text);

    return (
        <div
            style={{
                boxShadow: `${color} 0px 0px 10px`,
                padding: "1em",
                width: "fit-content",
                position: "relative",
                minHeight: "100px",
                maxHeight: "400px",
            }}
            onClick={(e) => _handleClick(e, "click")}
        >
            <span
                style={{
                    position: "absolute",
                    top: "4px",
                    right: "8px",
                    cursor: "pointer",
                }}
                onClick={(e) => _handleClick(e)}
                hidden={!handleDelete}
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
                ></textarea>
            ) : (
                "Add a note."
            )}
        </div>
    );
}
