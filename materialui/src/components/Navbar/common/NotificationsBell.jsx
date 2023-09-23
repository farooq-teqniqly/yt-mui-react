import React, { useState } from "react";
import { Badge } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { IconButton } from "@mui/material";
import { Tooltip } from "@mui/material";
import { BasicMenu } from "./BasicMenu";

export const NotificationsBell = ({
  notificationsCount = 0,
  tooltipMessage,
}) => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <>
      <Tooltip title={tooltipMessage}>
        <IconButton color="primary" onClick={handleOpen} anchorEl={anchorEl}>
          <Badge badgeContent={notificationsCount} color="primary">
            <NotificationsIcon></NotificationsIcon>
          </Badge>
        </IconButton>
      </Tooltip>
      <BasicMenu
        open={open}
        anchorEl={anchorEl}
        handleClose={handleClose}
      ></BasicMenu>
    </>
  );
};
