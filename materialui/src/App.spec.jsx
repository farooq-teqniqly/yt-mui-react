import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { App } from "./App";

describe("App component", () => {
  it("has a navbar", () => {
    render(
      <MemoryRouter>
        <App></App>
      </MemoryRouter>
    );
    const navbar = screen.getByText("Authentication");
    expect(navbar).toBeInTheDocument();
  });
});
