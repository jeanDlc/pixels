import { Container, Typography, Box, Stack } from "@mui/material";

import bgImage from "../../assets/background.jpg";
import Title from "@/components/Title";

import GithubLink from "@/components/GithubLink";

import ImagesPreview from "@/components/ImagesPreview";
import HomeSearch from "@/components/HomeSearch";

import type { AppSx } from "@/types";

const sxSection: AppSx = {
  backgroundImage: `url(${bgImage.src})`,
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
    backgroundColor: "rgba(0,0,0, 0.5)",
    zIndex: -1,
  },
};

const Home = () => {
  return (
    <Box>
      <Box sx={sxSection}>
        <Container>
          <Stack
            sx={{ pt: 1 }}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Title />
            <GithubLink />
          </Stack>
          <Container maxWidth="md">
            <Box sx={{ mt: { xs: 5, md: 10 } }}>
              <Typography variant="h4" component="h2" mb={4}>
                The best free stock photos, royalty-free images and videos
                shared by creators.
              </Typography>

              <HomeSearch />
            </Box>
          </Container>
        </Container>
      </Box>
      <Box component="main">
        <ImagesPreview />
      </Box>
    </Box>
  );
};

export default Home;
