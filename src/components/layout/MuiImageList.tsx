import React from "react";
import {
  Stack,
  ImageList,
  ImageListItem,
  Box,
  ImageListItemBar,
} from "@mui/material";

export const MuiImageList = () => {
  return (
    <Stack spacing={4}>
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>

      <ImageList
        variant="woven"
        sx={{ width: 500, height: 450 }}
        cols={3}
        gap={8}
      >
        {itemData2.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>

      <Box sx={{ width: 500, height: 450, overflowY: "scroll" }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData2.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format&dpr=2`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar title={item.title} />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Stack>
  );
};

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1525351484163-7529414344d8",
    title: "breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    title: "burger",
  },
  {
    img: "https://images.unsplash.com/photo-1544787219-7f47ccb76574",
    title: "tea",
  },
];

const itemData2 = [
  {
    img: "https://plus.unsplash.com/premium_photo-1676929360029-65fadc001ff7",
    title: "Rawa",
  },
  {
    img: "https://images.unsplash.com/photo-1525351484163-7529414344d8",
    title: "egg",
  },
  {
    img: "https://images.unsplash.com/photo-1484723091739-30a097e8f929",
    title: "bread",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1676929360029-65fadc001ff7",
    title: "egg mix",
  },
  {
    img: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759",
    title: "roti",
  },
  {
    img: "https://images.unsplash.com/photo-1500315331616-db4f707c24d1",
    title: "jam",
  },
  {
    img: "https://images.unsplash.com/photo-1579867779026-d8285a8c9625",
    title: "fruits",
  },
  {
    img: "https://images.unsplash.com/photo-1613846594009-15e8fda0657e",
    title: "oats",
  },
];
