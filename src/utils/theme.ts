import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: "rgb(99, 102, 241)",
      },
    },
    components: {
      MuiButton: {
        defaultProps: {
          variant: "contained",
        },
      },
      MuiContainer: {
        defaultProps: {
          maxWidth: "xl",
        },
      },
    },
  })
);
