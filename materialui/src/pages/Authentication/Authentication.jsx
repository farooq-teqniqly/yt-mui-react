import React from "react";
import { pageStyles } from "../pageStyles";
import Grid from "@mui/material/Grid";
import { CommonButton } from "../../components/Navbar/common/CommonButton";

export const Authentication = () => {
  const buttonStyle = {
    fontSize: 20,
    fontWeight: 700,
    backgroundColor: "red",
    "&:hover": {
      backgroundColor: "yellow",
    },
  };

  return (
    <Grid item xs={8} sx={pageStyles}>
      <p>Authentication page!</p>
      <CommonButton variant="outlined" size="large" sx={buttonStyle}>
        Login
      </CommonButton>
    </Grid>
  );
};
