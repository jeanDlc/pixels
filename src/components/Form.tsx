import { useState } from "react";
import { Box } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

import type { FormEvent } from "react";

const Form = ({
  setSearch,
  setPagination,
}: {
  setSearch: (s: string) => void;
  setPagination: (p: number) => void;
}) => {
  const [category, setCategory] = useState("");
  const [hasError, setHasError] = useState(false);
  //submit
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (category.trim() === "") {
      setHasError(true);
      return;
    }
    setPagination(1);
    setHasError(false);

    setSearch(category.trim());

    setCategory("");
  };

  return (
    <Box sx={{ textAlign: "center" }}>
      <Box component={"form"} onSubmit={handleSubmit}>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search..."
            inputProps={{ "aria-label": "search" }}
            onChange={(e) => setCategory(e.target.value)}
          />
        </Search>
        <Snackbar
          open={hasError}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <Alert
            variant="filled"
            severity="error"
            onClose={() => setHasError(false)}
          >
            You must input a valid text to search!
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
};

export default Form;
