import type { Metadata } from "next";

import "./styles.scss";
import ColorModeProvider from "@/theme/provider";
import { CssBaseline } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

export const metadata: Metadata = {
  title: "On Demand Home Services",
  description: "On Demand Home Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ColorModeProvider>
          <CssBaseline />
          <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
        </ColorModeProvider>
      </body>
    </html>
  );
}
