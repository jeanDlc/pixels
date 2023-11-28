import { FormEvent, useState } from "react";
import useSWR from "swr";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { Container, Typography, Box, InputBase, Alert } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";

import bgImage from "../../public/background.jpg";
import Title from "../components/Title";
import { fetcher } from "../utils/fetcher";
import { Api } from "../services";
import ImageListSkeleton from "../components/ImageList/Skeleton";
import ImageList from "../components/ImageList";

import type { iImage } from "../types";

const StyledHero = styled(Box)(() => ({
  backgroundImage: `url(${bgImage})`,
  backgroundPosition: "center center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  minHeight: "60vh",
  position: "relative",
  color: "white",
  zIndex: 1,
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    backgroundColor: alpha("#000", 0.5),
    zIndex: -1,
  },
}));

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

const Home = () => {
  const {
    data,
    error: hasError,
    isLoading,
  } = useSWR<{
    hits: iImage[];
    total: number;
    totalHits: number;
  }>(Api.createRequestUrl({ search: "popular", pagination: 1 }), fetcher);

  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchQuery = search.trim();
    if (!searchQuery) {
      //TODO dispatch error messages
      alert("error");
      return;
    }
    const params = new URLSearchParams({ page: "1" });
    navigate({ pathname: `/search/${searchQuery}`, search: params.toString() });
  };

  return (
    <div>
      <StyledHero component={"section"}>
        <Container>
          <Title />
          <Container maxWidth="md">
            <Box mt={10}>
              <Typography variant="h4" mb={2}>
                The best free stock photos, royalty-free images and videos
                shared by creators.
              </Typography>
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
            </Box>
          </Container>
        </Container>
      </StyledHero>
      {isLoading ? (
        <ImageListSkeleton />
      ) : hasError ? (
        <Container sx={{ mt: 1 }}>
          <Alert variant="filled" severity="error">
            Error while searching images. Please try again later...
          </Alert>
        </Container>
      ) : (
        <ImageList imageList={data?.hits} />
      )}
    </div>
  );
};

export default Home;
