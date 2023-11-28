import { Box, Typography, Container } from "@mui/material";
import MuiImageList from "@mui/material/ImageList";
import MuiImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import RedirectIcon from "@mui/icons-material/OpenInNew";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { useAppMediaQuery } from "../../hooks/useAppMediaQuery";

import type { iImage } from "../../types";

const ImageList = ({ imageList }: { imageList?: iImage[] }) => {
  const isMobile = useAppMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isMedium = useAppMediaQuery((theme) => theme.breakpoints.down("md"));

  if (!imageList?.length) return null;

  return (
    <>
      <Container maxWidth="xl">
        <MuiImageList cols={isMobile ? 1 : isMedium ? 2 : 3}>
          {imageList.map((image, i) => (
            <MuiImageListItem key={image.id}>
              <img
                srcSet={`${image.largeImageURL}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${image.largeImageURL}?w=248&fit=crop&auto=format`}
                alt={`Picture from ${image.user}`}
                loading={i < 3 ? "eager" : "lazy"}
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
      ></Box>
    </>
  );
};

export default ImageList;
