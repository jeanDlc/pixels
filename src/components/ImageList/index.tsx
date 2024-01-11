import Image from "next/image";
import { Box, Typography, Container } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import MuiImageList from "@mui/material/ImageList";
import MuiImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import RedirectIcon from "@mui/icons-material/OpenInNew";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { useAppMediaQuery } from "@/hooks/useAppMediaQuery";

import type { iImage } from "@/types";

const ImageList = ({ imageList }: { imageList?: iImage[] }) => {
  const isMobile = useAppMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isMedium = useAppMediaQuery((theme) => theme.breakpoints.down("md"));
  const isLarge = useAppMediaQuery((theme) => theme.breakpoints.down("lg"));

  if (!imageList?.length) return null;

  return (
    <>
      <Container maxWidth="xl">
        <MuiImageList cols={isMobile ? 1 : isMedium ? 2 : isLarge ? 3 : 4}>
          {imageList.map((image, i) => (
            <MuiImageListItem key={image.id}>
              <Box
                sx={{
                  height: 400,
                  position: "relative",
                }}
              >
                <Image
                  layout="fill"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                  src={`${image.webformatURL}`}
                  alt={`Picture from ${image.user}`}
                  loading={i < 3 ? "eager" : "lazy"}
                />
              </Box>

              <ImageListItemBar
                title={`@${image.user}`}
                subtitle={
                  <Box display={"flex"} gap={1}>
                    <Typography> {image.likes} </Typography>
                    <FavoriteBorderIcon fontSize="small" />
                  </Box>
                }
                actionIcon={
                  <Tooltip title="Visit page to know more about it">
                    <IconButton
                      href={image.pageURL}
                      target="_blank"
                      rel="noreferrer nofollow"
                      sx={{
                        color: "rgba(255, 255, 255, 0.7)",
                        transition: "all .2s ease-out",

                        "&:hover": { color: "white", transform: "scale(1.1)" },
                      }}
                      aria-label={`info about ${image.user} picture`}
                    >
                      <RedirectIcon />
                    </IconButton>
                  </Tooltip>
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
