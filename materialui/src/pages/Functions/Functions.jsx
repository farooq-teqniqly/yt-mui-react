import React from "react";
import { pageStyles } from "../pageStyles";
import Grid from "@mui/material/Grid";

export const Functions = () => {
  return (
    <Grid item xs={8} sx={pageStyles}>
      <span>Functions page!</span>
      <a href={`/`}>Home</a>
    </Grid>
  );
};
