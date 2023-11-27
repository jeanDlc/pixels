import Pagination from "../Pagination";

import { Box, Typography, Container, Stack } from "@mui/material";
import MuiImageList from "@mui/material/ImageList";
import MuiImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import RedirectIcon from "@mui/icons-material/OpenInNew";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { useAppMediaQuery } from "../../hooks/useAppMediaQuery";

import type { iImage } from "../../types";

const ImageList = ({
  imageList,
  search,
  setPagination,
  pagination,
}: {
  imageList?: iImage[];
  search: string;
  setPagination: (p: number) => void;
  pagination: number;
}) => {
  const isMobile = useAppMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isMedium = useAppMediaQuery((theme) => theme.breakpoints.down("md"));

  if (!imageList?.length) return null;

  return (
    <>
      <Container maxWidth="xl">
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography sx={{ flex: "1" }}>
            Page N° {pagination}. Results for
            <span> "{search}"</span>
          </Typography>
          <Pagination setPagination={setPagination} pagination={pagination} />
        </Stack>
        <MuiImageList cols={isMobile ? 1 : isMedium ? 2 : 3}>
          {imageList.map((image) => (
            <MuiImageListItem key={image.id}>
              <img
                srcSet={`${image.largeImageURL}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${image.largeImageURL}?w=248&fit=crop&auto=format`}
                alt={`Picture from ${image.user}`}
                loading="lazy"
              />
              <ImageListItemBar
                title={`@${image.user}`}
                subtitle={
                  <Box display={"flex"} gap={1}>
                    <Typography> {image.likes} </Typography>
                    <FavoriteBorderIcon fontSize="small" />
                  </Box>
                }
                actionIcon={
                  <IconButton
                    href={image.pageURL}
                    target="_blank"
                    rel="noreferrer nofollow"
                    title="Visit page to know more about it"
                    sx={{
                      color: "rgba(255, 255, 255, 0.54)",
                      "&:hover": { color: "white" },
                    }}
                    aria-label={`info about ${image.user} picture`}
                  >
                    <RedirectIcon />
                  </IconButton>
                }
              />
            </MuiImageListItem>
          ))}
        </MuiImageList>
      </Container>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          my: 3,
        }}
      >
        <Pagination setPagination={setPagination} pagination={pagination} />
      </Box>
    </>
  );
};

export default ImageList;
