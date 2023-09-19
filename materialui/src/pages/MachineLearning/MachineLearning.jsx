import React from "react";
import { pageStyles } from "../pageStyles";
import Grid from "@mui/material/Grid";

export const MachineLearning = () => {
  return (
    <Grid item xs={8} sx={pageStyles}>
      <span>Machine Learning page!</span>
      <a href={`/`}>Home</a>
    </Grid>
  );
};
