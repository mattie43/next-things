"use client";

import { useState } from "react";
import { Button } from "./button";

type SnackbarProps = {
  snackbarRef: React.MutableRefObject<{
    open: (message: string) => void;
  } | null>;
};

export const Snackbar = (props: SnackbarProps) => {
  const { snackbarRef } = props;
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  snackbarRef.current = {
    open: (message: string) => {
      setMessage(message);
      setOpen(true);
    },
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div
      className={`
        fixed text-foreground bottom-10 left-10 p-2 rounded-sm transition-all
        bg-slate-600 flex items-center shadow-md
        ${open ? "translate-x-0" : "-translate-x-[100%] left-0"}
      `}
    >
      {message}
      <Button variant="text" onClick={handleClose}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e3e3e3"
        >
          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
        </svg>
      </Button>
    </div>
  );
};
