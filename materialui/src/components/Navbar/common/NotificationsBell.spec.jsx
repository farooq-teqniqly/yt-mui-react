import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  NotificationsBell,
  TOOLTIP_DEFAULT_MESSAGE,
} from "./NotificationsBell";

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

    it("Does not show zero notifications.", () => {
      render(<NotificationsBell></NotificationsBell>);
      const notificationsCount = screen.queryByText("0");
      expect(notificationsCount).not.toBeInTheDocument();
    });
  });
  describe("User interaction", () => {
    it("Shows tooltip with custom message", async () => {
      const tooltipMessage = "This is a test.";

      const user = userEvent.setup();
      render(
        <NotificationsBell tooltipMessage={tooltipMessage}></NotificationsBell>
      );

      const bell = screen.getByRole("button");
      await user.hover(bell);

      const tooltip = screen.getByLabelText(tooltipMessage);

      expect(tooltip).toBeInTheDocument();
    });
  });
});
