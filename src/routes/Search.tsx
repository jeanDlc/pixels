import { Alert, Container, Typography, Box, Stack } from "@mui/material";
import { useParams, useSearchParams } from "react-router-dom";

import ImageList from "../components/ImageList";
import ImageListSkeleton from "../components/ImageList/Skeleton";
import Header from "../components/Header";
import { useImages } from "../hooks/useImages";
import Pagination from "../components/Pagination";

function Search() {
  const [searchParams] = useSearchParams();

  const { search } = useParams();

  if (!search) {
    throw new Error("Invalid request, you must provide a correct search");
  }

  const page = Number(searchParams.get("page") ?? 1);

  const { data, hasError, isLoading } = useImages({ search, page });

  return (
    <>
      <Header />
      <Box component="main" mt={8}>
        {isLoading ? (
          <ImageListSkeleton />
        ) : hasError ? (
          <Container>
            <Alert variant="filled" severity="error">
              Error while searching images. Please try again later...
            </Alert>
          </Container>
        ) : (
          <>
            <Container>
              <Stack
                direction={{ xs: "column", md: "row" }}
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
                mb={5}
              >
                <Typography variant="h4" component="h2">
                  Free images of{" "}
                  <Box component="span" sx={{ textTransform: "capitalize" }}>
                    {search}
                  </Box>
                </Typography>
                <Pagination pagesCount={data?.pagesCount ?? 0} />
              </Stack>
            </Container>
            <ImageList imageList={data?.hits} />
            <Stack justifyContent="center" alignItems="center" mb={5}>
              <Pagination pagesCount={data?.pagesCount ?? 0} />
            </Stack>
          </>
        )}
      </Box>
    </>
  );
}

export default Search;
