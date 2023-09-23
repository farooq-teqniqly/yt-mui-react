import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { NotificationsBell } from "./NotificationsBell";
import { menuItems } from "./menuItems";

describe("NotificationsBell component", () => {
  describe("Layout", () => {
    it("Show the number of notifications", () => {
      const expectedNotificationsCount = 44;
      render(
        <NotificationsBell
          notificationsCount={expectedNotificationsCount}
        ></NotificationsBell>
      );
      const notificationsCount = screen.getByText(expectedNotificationsCount);
      expect(notificationsCount).toBeInTheDocument();
    });

    it("Shows '99+' notifications when the count is 100 or more.", () => {
      const expectedNotificationsCount = "99+";
      render(<NotificationsBell notificationsCount={1000}></NotificationsBell>);
      const notificationsCount = screen.getByText(expectedNotificationsCount);
      expect(notificationsCount).toBeInTheDocument();
    });

    it("Is disabled when there are zero notifications", () => {
      render(<NotificationsBell></NotificationsBell>);

      const bell = screen.getByRole("button");
      expect(bell).toBeDisabled();
    });
  });

  describe("User interaction", () => {
    it("Shows tooltip with custom message when hovering", async () => {
      const tooltipMessage = "This is a test.";

      const user = userEvent.setup();
      render(
        <NotificationsBell
          tooltipMessage={tooltipMessage}
          notificationsCount={1}
        ></NotificationsBell>
      );

      const bell = screen.getByRole("button");
      await user.hover(bell);

      const tooltip = screen.getByLabelText(tooltipMessage);

      expect(tooltip).toBeInTheDocument();
    });

    const labels = menuItems.map((l) => l);

    it.each(labels)(
      "Shows menu when clicked and there is at least one notification",
      async (l) => {
        const user = userEvent.setup();
        render(<NotificationsBell notificationsCount={1}></NotificationsBell>);

        const bell = screen.getByRole("button");
        await user.click(bell);

        const menuItem = screen.getByText(l);
        expect(menuItem).toBeInTheDocument();
      }
    );
  });
});
