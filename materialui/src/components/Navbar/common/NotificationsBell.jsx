import React from "react";
import { Badge } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { IconButton } from "@mui/material";
import { Tooltip } from "@mui/material";

export const NotificationsBell = ({
  notificationsCount = 0,
  tooltipMessage,
}) => {
  return (
    <Tooltip title={tooltipMessage}>
      <IconButton color="primary">
        <Badge badgeContent={notificationsCount} color="primary">
          <NotificationsIcon></NotificationsIcon>
        </Badge>
      </IconButton>
    </Tooltip>
  );
};
