import React from "react";
import { pageStyles } from "../pageStyles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Grid from "@mui/material/Grid";
import { UploadFile } from "../../components/Navbar/common/UploadFile";

export const Functions = () => {
  const onFileChanged = (e) => {
    console.log(e);
  };

  return (
    <Grid item xs={8} sx={pageStyles}>
      <p>Functions page!</p>
      <UploadFile
        startIcon={<CloudUploadIcon></CloudUploadIcon>}
        onFileChanged={onFileChanged}
      ></UploadFile>
    </Grid>
  );
};
