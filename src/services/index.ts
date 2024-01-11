export class PixabayApi {
  private static BASE_URL = process.env.PIXABAY_BASE_URL ?? "";
  static IMAGES_PER_PAGE = 20;

  static createRequestUrl({ search, page }: { search: string; page: number }) {
    const base = new URL(this.BASE_URL);

    const params = new URLSearchParams({
      q: search,
      key: process.env.PIXABAY_KEY ?? "",
      page: page.toString(),
      per_page: this.IMAGES_PER_PAGE.toString(),
    });

    return `${base}?${params}`;
  }
}
