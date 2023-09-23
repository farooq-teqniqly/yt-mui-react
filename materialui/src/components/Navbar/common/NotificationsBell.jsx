import React, { useRef, useState } from "react";
import { Badge } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { IconButton } from "@mui/material";
import { Tooltip } from "@mui/material";
import { BasicMenu } from "./BasicMenu";

export const NotificationsBell = ({
  notificationsCount = 0,
  tooltipMessage,
}) => {
  const toolTipRef = useRef();
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = () => {
    setAnchorEl(toolTipRef.current);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setAnchorEl(null);
  };

  return (
    <>
      <Tooltip ref={toolTipRef} title={tooltipMessage}>
        <IconButton color="primary" onClick={handleOpen}>
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
