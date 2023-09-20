import { render, screen } from "@testing-library/react";
import { CommonButton } from "./CommonButton";

describe("CommonButton component", () => {
  describe("Layout", () => {
    it("Renders", () => {
      render(<CommonButton></CommonButton>);
    });
  });
});
