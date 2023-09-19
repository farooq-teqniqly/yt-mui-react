import React from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { navbarItems } from "./navbarItems";
import { navbarStyles } from "./styles";

export const Navbar = () => {
  return (
    <>
      <Drawer sx={navbarStyles.drawer} variant="permanent" anchor="left">
        <Toolbar />
        <Divider />
        <List>
          {navbarItems.map((item, _) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={navbarStyles.icons}>{item.icon}</ListItemIcon>
                <ListItemText sx={navbarStyles.text} primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
    </>
  );
};
