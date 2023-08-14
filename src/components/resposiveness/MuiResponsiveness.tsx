import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material";

const StyleBox = styled(Box)(({ theme }) => ({
  height: "250px",
  width: "250px",
  backgroundColor: theme.palette.neutral?.darker,
}));

export default function MuiResponsiveness() {
  return (
    <>
      <Box
        sx={{
          width: {
            xs: 100, //0
            sm: 200, //600
            md: 300, //900
            lg: 400, //1200
            xl: 500, //1536
          },
          height: "300px",
          bgcolor: "secondary.dark",
        }}
      ></Box>
      <StyleBox />
    </>
  );
}
