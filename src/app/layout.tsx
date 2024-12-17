import type { Metadata } from "next";
import { ThemeProvider } from "@mui/material";
import { theme } from "@/context/MuiTheme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
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
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
