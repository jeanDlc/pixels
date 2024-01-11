"use client";
import { Alert, Container, Typography, Box, Stack } from "@mui/material";

import ImageList from "@/components/ImageList";
import ImageListSkeleton from "@/components/ImageList/Skeleton";
import Header from "@/components/Header";
import { useImages } from "@/hooks/useImages";
import Pagination from "@/components/Pagination";
import { useSearchParams } from "next/navigation";

function Search({ params }: { params: { search: string; page: string } }) {
  const search = decodeURIComponent(params.search);
  const searchParams = useSearchParams();
  const page = searchParams.get("page");

  const { data, hasError, isLoading } = useImages({
    search,
    page: parseInt(page ?? "1"),
  });

  return (
    <>
      <Header />
      <Box component="main" sx={{ mt: { xs: 4, md: 8 } }}>
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
