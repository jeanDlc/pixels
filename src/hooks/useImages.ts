import useSWR from "swr";

import { Api } from "../services";
import { fetcher } from "../utils/fetcher";

import type { iImageApiResponse } from "../types";

const getPagesCount = ({
  total,
  resultsPerPage,
}: {
  total: number;
  resultsPerPage: number;
}) => {
  return Math.ceil(total / resultsPerPage);
};

interface iPopulatedImageResponse extends iImageApiResponse {
  pagesCount: number;
}

export const useImages = ({
  search,
  page,
}: {
  search: string;
  page?: number;
}) => {
  const {
    data: response,
    error: hasError,
    isLoading,
  } = useSWR<iImageApiResponse>(
    Api.createRequestUrl({ search, page: page ?? 1 }),
    fetcher
  );

  let data: iPopulatedImageResponse | undefined = undefined;

  if (response) {
    const pagesCount = getPagesCount({
      total: response.totalHits,
      resultsPerPage: Api.IMAGES_PER_PAGE,
    });

    data = { ...response, pagesCount };
  }

  return { data, hasError, isLoading };
};
