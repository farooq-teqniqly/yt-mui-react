import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Navbar } from "./Navbar";
import { navbarItems } from "./navbarItems";
import userEvent from "@testing-library/user-event";
import { router } from "../../router";
import { RouterProvider } from "react-router-dom";

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

  describe("User interaction", () => {
    const labels = navbarItems.map((l) => l.label);

    it.each(labels)(
      "When a menu item is clicked, it navigates to the expected page",
      async (label) => {
        const user = userEvent.setup();
        render(<RouterProvider router={router} />);
        await user.click(screen.getByText(label));
        const text = screen.getByText(`${label} page!`);
        expect(text).toBeInTheDocument();
      }
    );
  });
});
