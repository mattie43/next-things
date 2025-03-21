import type { Metadata } from "next";
import "@/globals.css";

export const metadata: Metadata = {
  title: "Matt Ericksen",
  description: "Where I build things.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
