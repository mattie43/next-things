import type { Metadata } from "next";
import "@/styles/index.css";

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
            <body>
                <div id="root">{children}</div>
            </body>
        </html>
    );
}
