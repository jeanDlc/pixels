export interface iImage {
  id: string;
  pageURL: string;
  user: string;
  likes: number;
  views: number;
  largeImageURL: string;
}

export interface iImageApiResponse {
  hits: iImage[];
  total: number;
  totalHits: number;
}
