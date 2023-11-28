import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import {
  Container,
  Typography,
  Box,
  InputBase,
  Alert,
  Tabs,
  Tab,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";

import bgImage from "../../assets/background.jpg";
import Title from "../components/Title";

import ImageListSkeleton from "../components/ImageList/Skeleton";
import ImageList from "../components/ImageList";
import { useImages } from "../hooks/useImages";

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

const tabs = ["General", "Popular", "Funny"] as const;

const Home = () => {
  const [search, setSearch] = useState("");

  const [currentTab, setCurrentTab] =
    useState<(typeof tabs)[number]>("General");

  const { data, hasError, isLoading } = useImages({
    search: currentTab,
    page: 1,
  });

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
    <Box>
      <StyledHero component={"section"}>
        <Container>
          <Title />
          <Container maxWidth="md">
            <Box mt={10}>
              <Typography variant="h4" component="h2" mb={2}>
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
      <Box component="main">
        <Container>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 3, mb: 5 }}>
            <Tabs
              value={currentTab}
              onChange={(_, value) => setCurrentTab(value)}
              aria-label="Different options for preview"
            >
              {tabs.map((tab) => (
                <Tab value={tab} label={tab.toLocaleUpperCase()} />
              ))}
            </Tabs>
          </Box>
          <Typography variant="h5" component="h3" sx={{ mb: 2 }}>
            Free stock images
          </Typography>
        </Container>
        {isLoading ? (
          <ImageListSkeleton />
        ) : hasError ? (
          <Container sx={{ mt: 1 }}>
            <Alert variant="filled" severity="error">
              Error while searching images. Please try again later...
            </Alert>
          </Container>
        ) : (
          <>
            <ImageList imageList={data?.hits} />
          </>
        )}
      </Box>
    </Box>
  );
};

export default Home;
