"use client";
import { Box, InputBase } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  transition: theme.transitions.create("background"),
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
  width: "100%",
  height: "50px",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: "100%",
  },
}));

const HomeSearch = () => {
  const [search, setSearch] = useState("");

  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchQuery = search.trim();
    if (!searchQuery) {
      //TODO dispatch error messages
      alert("error");
      return;
    }
    const params = new URLSearchParams({ page: "1" });
    router.push(`/search/${searchQuery}?${params.toString()}`);
  };

  return (
    <Box component={"form"} width={"100%"} onSubmit={handleSubmit}>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search..."
          inputProps={{ "aria-label": "search" }}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Search>
    </Box>
  );
};

export default HomeSearch;
