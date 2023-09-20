import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { UploadFile } from "./UploadFile";

describe("UploadFile component", () => {
  describe("Layout", () => {
    it("Renders", () => {
      render(<UploadFile></UploadFile>);
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
  });
});
