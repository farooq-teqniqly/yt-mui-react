import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export const UploadFile = ({ startIcon, onFileChanged }) => {
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (!onFileChanged) return;
    onFileChanged(selectedFile);
  };

  return (
    <Button component="label" variant="contained" startIcon={startIcon}>
      Upload file
      <VisuallyHiddenInput
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />
    </Button>
  );
};
