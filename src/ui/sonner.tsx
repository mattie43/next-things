"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner, ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--color-popover)",
          "--normal-border": "var(--color-border)",
          fontFamily: "var(--font-overpass)",
        } as React.CSSProperties
      }
      closeButton
      duration={2500}
      position="bottom-left"
      toastOptions={{
        style: {
          width: "fit-content",
          whiteSpace: "nowrap",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
