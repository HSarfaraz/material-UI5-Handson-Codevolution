import React from "react";
import { Box } from "@mui/material";
export const MuiLayout = () => {
  return (
    <>
      <Box
        //   component="span"
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          width: "100px",
          height: "50px",
          padding: "16px",
          "&:hover": {
            backgroundColor: "primary.light",
          },
        }}
      >
        Codevolution
      </Box>
      <Box
        display="flex"
        height="100px"
        width="100px"
        bgcolor="success.light"
        p={2}
      >
        Sample
      </Box>
      <Box
        display="flex"
        height="100px"
        width="100px"
        bgcolor="warning.light"
        p={2}
      >
        test
      </Box>
    </>
  );
};
