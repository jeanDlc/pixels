import useMediaQuery from "@mui/material/useMediaQuery";
import { Theme } from "../components/ThemeProvider";

export const useAppMediaQuery = useMediaQuery<Theme>;
