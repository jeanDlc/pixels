import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
export const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: "rgb(99, 102, 241)",
      },
      text: { primary: "#2c343e" },
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