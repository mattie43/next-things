"use client";

import gh from "./imgs/github-white.png";
import li from "./imgs/linkedin.png";
import em from "./imgs/gmail.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { pastelColors } from "@/constants";
import { Snackbar } from "@mui/material";

export const MyLinks = () => {
  const [copied, setCopied] = useState(false);
  const [colors, setColors] = useState([pastelColors[0], pastelColors[4]]);

  const copyEmail = () => {
    navigator.clipboard.writeText("mattericksen93@gmail.com");

    const colorOne =
      pastelColors[Math.floor(Math.random() * pastelColors.length)];
    const colorTwo =
      pastelColors[Math.floor(Math.random() * pastelColors.length)];

    setColors([colorOne, colorTwo]);

    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2500);
  };

  return (
    <div className="flex gap-4 items-center">
      <Link href="https://github.com/mattie43" target="_blank">
        <Image src={gh} width={36} height={36} alt="Github" />
      </Link>
      <Link href="https://www.linkedin.com/in/matt-ericksen/" target="_blank">
        <Image src={li} width={36} height={36} alt="LinkedIn" />
      </Link>
      <div className="cursor-pointer">
        <Image
          src={em}
          width={42}
          height={42}
          alt="Copy Email"
          onClick={copyEmail}
        />
      </div>
      <Snackbar
        message="Copied to clipboard!"
        open={copied}
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: "var(--black)",
            border: `2px solid ${colors[0]}`,
            color: colors[1],
          },
        }}
      />
    </div>
  );
};
