"use client";

import "@/styles/globals.css";
import { Toaster } from "@/ui";
import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setDark(window?.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  return (
    <html lang="en" className={dark ? "dark" : ""}>
      <title>Matt Ericksen</title>
      <meta name="description" content="Where I build things." />
      <body className="bg-background text-foreground">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
