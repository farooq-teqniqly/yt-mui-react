import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Navbar } from "./Navbar";
import { navbarItems } from "./navbarItems";

describe("Navbar component", () => {
  describe("Layout", () => {
    it("Has the menu items", () => {
      render(
        <MemoryRouter>
          <Navbar></Navbar>
        </MemoryRouter>
      );

      const labels = navbarItems.map((l) => l.label);

      labels.forEach((l) => {
        const menuItem = screen.getByText(l);
        expect(menuItem).toBeInTheDocument();
      });
    });
  });
});
