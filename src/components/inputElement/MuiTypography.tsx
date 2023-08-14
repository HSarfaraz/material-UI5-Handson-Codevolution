import React from "react";
import { Typography } from "@mui/material";
export const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        h4 Heading
      </Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>

      <Typography>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis optio
        minus obcaecati architecto qui dolor. Impedit, quibusdam. Quam
        blanditiis qui magnam quasi, quisquam nesciunt minus ipsam, ea nemo
        tenetur voluptates.
      </Typography>
      <br />
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi labore
        tempore voluptatem quasi tenetur, repudiandae, suscipit, voluptatibus
        velit deserunt porro odit laudantium omnis? Unde eos possimus sunt
        mollitia eaque accusamus?
      </Typography>
    </div>
  );
};
