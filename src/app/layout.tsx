import DashboardIcon from "@mui/icons-material/Dashboard";
import type { Navigation } from "@toolpad/core/AppProvider";
import { NextAppProvider } from "@toolpad/core/nextjs";
import * as React from "react";
import theme from "../../theme";

const NAVIGATION: Navigation = [
  {
    kind: "header",
    title: "Bem vindo(a)",
  },
  {
    title: "Dashboard",
    kind: "page",
    icon: <DashboardIcon />,
  },
];

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>): Promise<React.JSX.Element> {
  return (
    <html lang="en" data-toolpad-color-scheme="light">
      <body>
        <NextAppProvider theme={theme} navigation={NAVIGATION}>
          {children}
        </NextAppProvider>
      </body>
    </html>
  );
}
