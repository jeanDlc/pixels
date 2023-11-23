import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../utils/theme";

import type { ReactNode } from "react";

export type Theme = typeof theme;

export default function AppThemeProvider({
  children,
}: {
  children: ReactNode;
}) {
  return <ThemeProvider theme={theme}> {children} </ThemeProvider>;
}
