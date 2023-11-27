import { useState } from "react";
import useSWR from "swr";
import { Alert, Container } from "@mui/material";
import ImageList from "./components/ImageList";
import { Api } from "./services";
import ImageListSkeleton from "./components/ImageList/Skeleton";
import { fetcher } from "./utils/fetcher";

import type { iImage } from "./types";
import Header from "./components/Header";

function App() {
  const [search, setSearch] = useState("general");
  const [pagination, setPagination] = useState(1);

  const {
    data: list,
    error: hasError,
    isLoading,
  } = useSWR<{
    hits: iImage[];
    total: number;
    totalHits: number;
  }>(Api.createRequestUrl({ search, pagination }), fetcher);

  return (
    <>
      <Header setSearch={setSearch} setPagination={setPagination} />
      {isLoading ? (
        <ImageListSkeleton />
      ) : hasError ? (
        <Container>
          <Alert variant="filled" severity="error">
            Error while searching images. Please try again later...
          </Alert>
        </Container>
      ) : (
        <ImageList
          imageList={list?.hits}
          search={search}
          setPagination={setPagination}
          pagination={pagination}
        />
      )}
    </>
  );
}

export default App;
