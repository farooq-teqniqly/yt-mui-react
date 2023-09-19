import React from "react";
import { pageStyles } from "../pageStyles";
import Grid from "@mui/material/Grid";

export const Storage = () => {
  return (
    <Grid item xs={8} sx={pageStyles}>
      <span>Storage page!</span>
      <a href={`/`}>Home</a>
    </Grid>
  );
};
