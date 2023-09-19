import React from "react";
import { pageStyles } from "../pageStyles";
import Grid from "@mui/material/Grid";

export const Authentication = () => {
  return (
    <Grid item xs={8} sx={pageStyles}>
      <span>Authentication page!</span>
      <a href={`/`}>Home</a>
    </Grid>
  );
};
