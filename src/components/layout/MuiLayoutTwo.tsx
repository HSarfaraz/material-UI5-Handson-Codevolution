import React from "react";
import { Box, Stack, Divider } from "@mui/material";
export const MuiLayoutTwo = () => {
  return (
    <Stack
      sx={{ border: "1px solid" }}
      direction="row"
      spacing={2}
      divider={<Divider orientation="vertical" flexItem />}
    >
      {" "}
      <Box
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          height: "100px",
          width: "100px",
          padding: "16px",
          "&:hover": {
            backgroundColor: "primary.light",
          },
        }}
      >
        Codevolution
      </Box>
      {/* <Divider /> */}
      <Box
        sx={{
          display: "flex",
          height: "100px",
          width: "100px",
          padding: "16px",
          bgcolor: "success.light",
        }}
      >
        Codevolution
      </Box>
    </Stack>
  );
};
