import useSWR from "swr";
import { Alert, Container } from "@mui/material";
import { useParams, useSearchParams } from "react-router-dom";

import ImageList from "../components/ImageList";
import { Api } from "../services";
import ImageListSkeleton from "../components/ImageList/Skeleton";
import { fetcher } from "../utils/fetcher";
import Header from "../components/Header";

import type { iImage } from "../types";

function Search() {
  const [searchParams] = useSearchParams();

  const { search } = useParams();

  if (!search) {
    throw new Error("Invalid request, you must provide a correct search");
  }

  const page = Number(searchParams.get("page") ?? 1);

  const {
    data: list,
    error: hasError,
    isLoading,
  } = useSWR<{
    hits: iImage[];
    total: number;
    totalHits: number;
  }>(Api.createRequestUrl({ search, pagination: page }), fetcher);

  return (
    <>
      <Header />
      {isLoading ? (
        <ImageListSkeleton />
      ) : hasError ? (
        <Container>
          <Alert variant="filled" severity="error">
            Error while searching images. Please try again later...
          </Alert>
        </Container>
      ) : (
        <ImageList imageList={list?.hits} />
      )}
    </>
  );
}

export default Search;
