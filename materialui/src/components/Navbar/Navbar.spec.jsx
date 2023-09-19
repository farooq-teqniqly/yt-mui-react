import { render, screen } from "@testing-library/react";
import { Navbar } from "./Navbar";

describe("Navbar component", () => {
  it("Renders without crashing", () => {
    render(<Navbar></Navbar>);
  });
});
