import type { iImage } from "../types";

export class Api {
  private static BASE_URL = import.meta.env.VITE_PIXABAY_BASE_URL;

  //TODO delete this method
  static async performRequest({
    search,
    pagination,
  }: {
    search: string;
    pagination: number;
  }) {
    const url = new URL(this.BASE_URL);
    url.searchParams.append("q", search);
    url.searchParams.append("key", import.meta.env.VITE_PIXABAY_KEY);
    url.searchParams.append("page", pagination.toString());

    const res = await fetch(url);

    const data = await res.json();

    return data.hits as iImage[];
  }
  static createRequestUrl({
    search,
    pagination,
  }: {
    search: string;
    pagination: number;
  }) {
    const base = new URL(this.BASE_URL);

    const params = new URLSearchParams({
      q: search,
      key: import.meta.env.VITE_PIXABAY_KEY,
      page: pagination.toString(),
    });

    return `${base}?${params}`;
  }
}
