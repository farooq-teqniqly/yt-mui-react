import React from "react";
import Grid from "@mui/material/Grid";
import { NotificationsBell } from "../../components/Navbar/common/NotificationsBell";

export const Authentication = () => {
  return (
    <Grid item xs={8}>
      <p>Authentication page!</p>
      <NotificationsBell
        notificationsCount={8}
        tooltipMessage={"You have unread notifications."}
      ></NotificationsBell>
    </Grid>
  );
};
