"use client";

import { Alert, Box, Container, Tab, Tabs, Typography } from "@mui/material";
import ImageListSkeleton from "./ImageList/Skeleton";
import ImageList from "./ImageList";
import { useImages } from "@/hooks/useImages";
import { useState } from "react";

const tabs = ["Popular", "General", "Funny"] as const;

const ImagesPreview = () => {
  const [currentTab, setCurrentTab] = useState<(typeof tabs)[number]>(tabs[0]);

  const { data, hasError, isLoading } = useImages({
    search: currentTab,
    page: 1,
  });

  return (
    <>
      <Container>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 3, mb: 5 }}>
          <Tabs
            value={currentTab}
            onChange={(_, value) => setCurrentTab(value)}
            aria-label="Different options for preview"
          >
            {tabs.map((tab) => (
              <Tab key={tab} value={tab} label={tab.toLocaleUpperCase()} />
            ))}
          </Tabs>
        </Box>
        <Typography variant="h5" component="h3" sx={{ mb: 2 }}>
          Free stock images
        </Typography>
      </Container>
      {isLoading ? (
        <ImageListSkeleton />
      ) : hasError ? (
        <Container sx={{ mt: 1 }}>
          <Alert variant="filled" severity="error">
            Error while searching images. Please try again later...
          </Alert>
        </Container>
      ) : (
        <>
          <ImageList imageList={data?.hits} />
        </>
      )}
    </>
  );
};

export default ImagesPreview;
