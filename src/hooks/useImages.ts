import type { iPopulatedImageResponse } from "@/types";
import { useEffect, useState } from "react";

export const useImages = ({
  search,
  page,
}: {
  search: string;
  page?: number;
}) => {
  const [data, setData] = useState<iPopulatedImageResponse | null>(null);

  const [hasError, setHasError] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (search && page) {
      (async () => {
        if (!isLoading) setIsLoading(true);

        const params = new URLSearchParams();
        params.append("search", search);
        params.append("page", (page ?? 1).toString());

        const path = `/api/images?${params.toString()}`;
        try {
          const res = await fetch(path);

          if (!res.ok) {
            throw new Error("Unable to perform request");
          } else {
            setData(await res.json());
          }
        } catch (error) {
          setHasError(true);
        } finally {
          setIsLoading(false);
        }
      })();
    }
  }, [search, page]);

  return { data, hasError, isLoading };
};
