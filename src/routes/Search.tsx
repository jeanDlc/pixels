import { Alert, Container } from "@mui/material";
import { useParams, useSearchParams } from "react-router-dom";

import ImageList from "../components/ImageList";
import ImageListSkeleton from "../components/ImageList/Skeleton";
import Header from "../components/Header";
import { useImages } from "../hooks/useImages";

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
      {isLoading ? (
        <ImageListSkeleton />
      ) : hasError ? (
        <Container>
          <Alert variant="filled" severity="error">
            Error while searching images. Please try again later...
          </Alert>
        </Container>
      ) : (
        <ImageList imageList={data?.hits} />
      )}
    </>
  );
}

export default Search;
