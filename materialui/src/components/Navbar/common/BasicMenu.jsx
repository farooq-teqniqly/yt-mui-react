import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { menuItems } from "./menuItems";

export const BasicMenu = ({ anchorEl, handleClose, open }) => {
  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      {menuItems.map((label, index) => (
        <MenuItem key={index} onClick={handleClose}>
          {label}
        </MenuItem>
      ))}
    </Menu>
  );
};
