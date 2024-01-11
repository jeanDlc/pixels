import { LRUCache } from "lru-cache";
import { MONTH_IN_MS } from "@/constants/time";
import { PixabayApi } from "@/services";
import { iImageApiResponse, iPopulatedImageResponse } from "@/types";
import { calculatePagesCount } from "@/utils/calculatePagesCount";

import { type NextRequest } from "next/server";

const cache = new LRUCache<string, iImageApiResponse>({
  max: 20,
  ttl: MONTH_IN_MS,
  fetchMethod: async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("Unexpected error while performing request");
    }
    return await res.json();
  },
});

export const GET = async (req: NextRequest) => {
  const searchParams = req.nextUrl.searchParams;

  const search = searchParams.get("search");
  const page = parseInt(searchParams.get("page") || "1");

  if (!search) {
    return new Response("Bad Request. Missing `search` param", { status: 400 });
  }

  const requestUrl = PixabayApi.createRequestUrl({ search, page });
  try {
    const imagesData = await cache.fetch(requestUrl);

    if (!imagesData) {
      return new Response("Not found", { status: 404 });
    }

    const populatedResponse: iPopulatedImageResponse = {
      ...imagesData,
      pagesCount: calculatePagesCount({
        total: imagesData.totalHits,
        resultsPerPage: PixabayApi.IMAGES_PER_PAGE,
      }),
    };

    return Response.json(populatedResponse);
  } catch (error) {
    cache.delete(requestUrl);
    return new Response("Internal server error. Couldn't perform the request", {
      status: 500,
    });
  }
};
