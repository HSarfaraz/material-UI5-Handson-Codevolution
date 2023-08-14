import React from "react";
import { Stack, CircularProgress, LinearProgress } from "@mui/material";

export const MuiProgress = () => {
  return (
    <Stack>
      <CircularProgress />
      <br />
      <CircularProgress color="success" />
      <br />
      <CircularProgress variant="determinate" value={60} />
      <br />
      <LinearProgress />
      <br />
      <LinearProgress color="success" />
      <br />
      <LinearProgress variant="determinate" value={60} />
      <br />
    </Stack>
  );
};
