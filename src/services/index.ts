export class Api {
  private static BASE_URL = import.meta.env.VITE_PIXABAY_BASE_URL;
  static IMAGES_PER_PAGE = 20;

  static createRequestUrl({ search, page }: { search: string; page: number }) {
    const base = new URL(this.BASE_URL);

    const params = new URLSearchParams({
      q: search,
      key: import.meta.env.VITE_PIXABAY_KEY,
      page: page.toString(),
      per_page: this.IMAGES_PER_PAGE.toString(),
    });

    return `${base}?${params}`;
  }
}
