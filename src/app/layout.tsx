"use client";

import "@/styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const dark = window?.matchMedia("(prefers-color-scheme: dark)").matches;

  return (
    <html lang="en" className={dark ? "dark" : ""}>
      <title>Matt Ericksen</title>
      <meta name="description" content="Where I build things." />
      <body className="bg-background text-foreground">{children}</body>
    </html>
  );
}
