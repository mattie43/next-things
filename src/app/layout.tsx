import type { Metadata } from "next";
import { ThemeProvider } from "@mui/material";
import { theme } from "@/context";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
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
                <AppRouterCacheProvider>
                    <ThemeProvider theme={theme}>
                        <div id="root">{children}</div>
                    </ThemeProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}
