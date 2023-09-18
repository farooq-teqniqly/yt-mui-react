import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  it("has a button", () => {
    render(<App></App>);
    const button = screen.getByRole("button", { name: "First MUI Component" });
    expect(button).toBeInTheDocument();
  });
});
