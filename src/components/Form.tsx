import { useState } from "react";

import { Box } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

import type { FormEvent } from "react";
import { useParams, useRouter } from "next/navigation";

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
  },
}));

const Form = () => {
  const { search } = useParams<{ search: string }>();
  const router = useRouter();
  const [searchInput, setSearchInput] = useState(
    decodeURIComponent(search) ?? "",
  );
  const [hasError, setHasError] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchInput.trim() === "") {
      setHasError(true);
      return;
    }

    setHasError(false);

    router.push(`/search/${searchInput.trim()}?page=1`);
  };

  return (
    <Box sx={{ textAlign: "center" }}>
      <Box component={"form"} onSubmit={handleSubmit}>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            value={searchInput}
            placeholder="Search..."
            inputProps={{ "aria-label": "search" }}
            onChange={(e) => setSearchInput(e.target.value)}
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
