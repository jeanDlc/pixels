export interface iImage {
  id: string;
  pageURL: string;
  user: string;
  likes: number;
  views: number;
  largeImageURL: string;
  webformatURL: string;

  imageHeight: number;
  imageSize: number;
  imageWidth: number;
}

export interface iImageApiResponse {
  hits: iImage[];
  total: number;
  totalHits: number;
}
