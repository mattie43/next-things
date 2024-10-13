"use client";

import gh from "@/img/github-white.png";
import li from "@/img/linkedin.png";
import em from "@/img/gmail.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const MyLinks = () => {
    const [copied, setCopied] = useState(false);

    const copyEmail = () => {
        navigator.clipboard.writeText("mattericksen93@gmail.com");
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 1500);
    };

    return (
        <div
            style={{
                display: "flex",
                marginTop: "1em",
                gap: "1em",
            }}
        >
            <Link href="https://github.com/mattie43" target="_blank">
                <Image
                    src={gh}
                    width={36}
                    height={36}
                    alt="Github"
                    style={{ cursor: "pointer" }}
                />
            </Link>
            <Link
                href="https://www.linkedin.com/in/matt-ericksen/"
                target="_blank"
            >
                <Image
                    src={li}
                    width={36}
                    height={36}
                    alt="LinkedIn"
                    style={{ cursor: "pointer" }}
                />
            </Link>
            <div style={{ position: "relative" }}>
                <Image
                    src={em}
                    width={42}
                    height={42}
                    alt="Email"
                    style={{ cursor: "pointer", marginTop: "-2px" }}
                    onClick={copyEmail}
                />
                {/* tooltip */}
                <span
                    style={{
                        position: "absolute",
                        top: "48px",
                        left: "-21px",
                        fontSize: "0.6em",
                        borderRadius: "4px",
                        padding: "4px",
                        border: "2px solid var(--pastel-pink)",
                        color: "var(--pastel-blue)",
                    }}
                    hidden={!copied}
                >
                    Copied to clipboard!
                </span>
            </div>
        </div>
    );
};
