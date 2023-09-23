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

export const DEFAULT_MAX_FILE_SIZE = 1024 * 1024;

export const UploadFile = ({
  startIcon,
  onFileChanged,
  maxFileSize = DEFAULT_MAX_FILE_SIZE,
  onMaxFileSizeExcceded,
}) => {
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    const fileSize = selectedFile.size;

    if (fileSize > maxFileSize) {
      if (onMaxFileSizeExcceded) {
        onMaxFileSizeExcceded({
          file: selectedFile,
          maxFileSize,
        });
      }
      return;
    }

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
