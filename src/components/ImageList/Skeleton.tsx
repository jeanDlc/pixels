import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Container from "@mui/material/Container";

const ImageListSkeleton = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        {Array.from(new Array(6)).map((_, index) => (
          <Grid item key={index} xs={12} md={6} lg={4}>
            <Skeleton
              sx={{ bgcolor: "grey.400" }}
              variant="rectangular"
              width={"100%"}
              height={200}
            />
            <Box sx={{ pt: 0.5 }}>
              <Skeleton sx={{ bgcolor: "grey.400" }} />
              <Skeleton sx={{ bgcolor: "grey.400" }} width="60%" />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ImageListSkeleton;
