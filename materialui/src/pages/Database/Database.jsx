import React from "react";
import { pageStyles } from "../pageStyles";
import Grid from "@mui/material/Grid";
import { CommonButton } from "../../components/Navbar/common/CommonButton";

export const Database = () => {
  return (
    <Grid item xs={8} sx={pageStyles}>
      <p>Database page!</p>
      <CommonButton variant="contained" color="primary">
        Connect to database
      </CommonButton>
    </Grid>
  );
};
