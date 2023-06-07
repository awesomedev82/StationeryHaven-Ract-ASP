import {
  Badge,
  Box,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { links } from "../lib/constants";
import { NavLink } from "react-router-dom";
import { ShoppingCart } from "@mui/icons-material";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLinkClick = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      <Drawer
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: "45vw",
          },
        }}
      >
        <List>
          {links.map(({ title, path, icon: Icon }) => (
            <ListItemButton
              key={path}
              component={NavLink}
              to={path}
              onClick={handleLinkClick}
              sx={{ textTransform: "capitalize" }}
            >
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <ListItemText>{title}</ListItemText>
            </ListItemButton>
          ))}
        </List>
      </Drawer>

      <Box sx={{ display: "flex", alignItems: "center", gap: "6%" }}>
        <Badge badgeContent="4" color="success">
          <ShoppingCart />
        </Badge>

        <IconButton onClick={() => setSidebarOpen(!sidebarOpen)} sx={{height: '2rem'}}>
          <MenuIcon />
        </IconButton>
      </Box>
    </>
  );
};

export default Sidebar;
