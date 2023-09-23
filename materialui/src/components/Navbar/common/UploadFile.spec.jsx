import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import fs from "fs";
import path from "path";
import { UploadFile, DEFAULT_MAX_FILE_SIZE } from "./UploadFile";

const loadImage = (fileName, type) => {
  const filePath = path.join(__dirname, fileName);
  const fileContents = fs.readFileSync(filePath);

  return new File([fileContents], fileName, {
    type: type,
  });
};

describe("UploadFile component", () => {
  describe("Layout", () => {
    it("Has a default maxFileSize of 1MB", async () => {
      const onMaxFileSizeExcceded = jest.fn();
      const image = loadImage("testImage-large.png", "image/png");

      render(
        <UploadFile onMaxFileSizeExcceded={onMaxFileSizeExcceded}></UploadFile>
      );
      const input = screen.getByLabelText("Upload file");
      await userEvent.upload(input, image);

      const callArguments = onMaxFileSizeExcceded.mock.calls[0];
      const exceededObject = callArguments[0];

      expect(exceededObject).toEqual({
        file: image,
        maxFileSize: DEFAULT_MAX_FILE_SIZE,
      });
    });
  });

  describe("User interaction", () => {
    it("Selects the file for upload", async () => {
      const fakeFile = new File(["hello"], "hello.png", { type: "image/png" });
      render(<UploadFile></UploadFile>);

      const input = screen.getByLabelText("Upload file");
      await userEvent.upload(input, fakeFile);

      expect(input.files[0]).toBe(fakeFile);
    });

    it("Allows only one file to be uploaded", async () => {
      const fakeFiles = [
        new File(["hello1"], "hello1.png", { type: "image/png" }),
        new File(["hello2"], "hello2.png", { type: "image/png" }),
      ];

      render(<UploadFile></UploadFile>);

      const input = screen.getByLabelText("Upload file");
      await userEvent.upload(input, fakeFiles);

      expect(input.files).toHaveLength(1);
    });

    it("Does not allow non-images", async () => {
      const fakeFile = new File(["hello"], "hello.docx", {
        type: ".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      });
      render(<UploadFile></UploadFile>);

      const input = screen.getByLabelText("Upload file");
      await userEvent.upload(input, fakeFile);

      expect(input.files).toHaveLength(0);
    });

    it("Calls the onFileChanged handler", async () => {
      const onFileChanged = jest.fn();
      const fakeFile = new File(["hello"], "hello.png", { type: "image/png" });
      render(<UploadFile onFileChanged={onFileChanged}></UploadFile>);

      const input = screen.getByLabelText("Upload file");
      await userEvent.upload(input, fakeFile);

      expect(onFileChanged).toHaveBeenCalledWith(fakeFile);
    });

    it("Does not call the onFileChanged handler when the file size is too large", async () => {
      const onFileChanged = jest.fn();
      const image = loadImage("testImage.jpg", "image/jpg");

      render(
        <UploadFile
          onFileChanged={onFileChanged}
          maxFileSize={1024 * 256}
        ></UploadFile>
      );

      const input = screen.getByLabelText("Upload file");
      await userEvent.upload(input, image);

      expect(onFileChanged).not.toHaveBeenCalledWith(expect.any(File));
    });

    it("Calls the onFileExceeded handler if provided when the file size is too large", async () => {
      const onFileChanged = jest.fn();
      const maxFileSize = 1024 * 256;
      const onMaxFileSizeExcceded = jest.fn();
      const image = loadImage("testImage.jpg", "image/jpg");

      render(
        <UploadFile
          onFileChanged={onFileChanged}
          maxFileSize={maxFileSize}
          onMaxFileSizeExcceded={onMaxFileSizeExcceded}
        ></UploadFile>
      );

      const input = screen.getByLabelText("Upload file");
      await userEvent.upload(input, image);

      expect(onMaxFileSizeExcceded).toHaveBeenCalled();

      const callArguments = onMaxFileSizeExcceded.mock.calls[0];
      const exceededObject = callArguments[0];

      expect(exceededObject).toEqual({
        file: image,
        maxFileSize,
      });
    });
  });
});
