import useSWR from "swr";

import { Api } from "../services";
import { fetcher } from "../utils/fetcher";

import type { iImage } from "../types";

export const useImages = ({
  search,
  page,
}: {
  search: string;
  page?: number;
}) => {
  const {
    data,
    error: hasError,
    isLoading,
  } = useSWR<{
    hits: iImage[];
    total: number;
    totalHits: number;
  }>(Api.createRequestUrl({ search, pagination: page ?? 1 }), fetcher);

  return { data, hasError, isLoading };
};
