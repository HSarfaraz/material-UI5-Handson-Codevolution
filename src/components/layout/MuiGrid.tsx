import React from "react";
import { Box, Stack, Divider, Grid, Paper } from "@mui/material";
export const MuiGrid = () => {
  return (
    <Paper sx={{ padding: "32px" }} elevation={4}>
      <Grid container my={4} rowSpacing={2} columnSpacing={1}>
        <Grid item xs={6} sm={6}>
          <Box bgcolor="primary.light" p={2}>
            Item 1
          </Box>
        </Grid>
        <Grid item xs={6} sm={6}>
          <Box bgcolor="success.light" p={2}>
            Item 2
          </Box>
        </Grid>
        <Grid item xs={6} sm={6}>
          <Box bgcolor="warning.light" p={2}>
            Item 3
          </Box>
        </Grid>
        <Grid item xs={6} sm={6}>
          <Box bgcolor="primary.light" p={2}>
            Item 4
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};
