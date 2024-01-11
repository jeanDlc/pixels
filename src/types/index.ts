import { theme } from "@/components/theme";
import type { SxProps } from "@mui/material";

export interface iImage {
  id: string;
  pageURL: string;
  user: string;
  likes: number;
  views: number;
  largeImageURL: string;
  webformatURL: string;
  webformatHeight: number;
  webformatWidth: number;

  imageHeight: number;
  imageSize: number;
  imageWidth: number;
}

export interface iImageApiResponse {
  hits: iImage[];
  total: number;
  totalHits: number;
}

export interface iPopulatedImageResponse extends iImageApiResponse {
  pagesCount: number;
}

export type AppTheme = typeof theme;

export type AppSx = SxProps<AppTheme>;
