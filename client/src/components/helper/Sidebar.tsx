import {
  Badge,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { links } from "../../lib/constants";
import { Link, NavLink } from "react-router-dom";
import { ShoppingCart } from "@mui/icons-material";
import { StyledFlexBox } from "../../muiStyles/navbar/navbar.styled";
import { useStoreContext } from "../../context/Context";

const Sidebar = () => {
  const { basket } = useStoreContext();

  const itemCount = basket?.items.reduce((a, b) => {
    return a + b.quantity;
  }, 0);

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
                <Icon style={{ color: "#326577c9" }} />
              </ListItemIcon>
              <ListItemText>{title}</ListItemText>
            </ListItemButton>
          ))}
        </List>
      </Drawer>

      <StyledFlexBox sx={{ gap: "6%" }}>
        <Badge
          badgeContent={itemCount}
          color="success"
          component={Link}
          to="/basket"
        >
          <ShoppingCart style={{ color: "#1281a0" }} />
        </Badge>

        <IconButton
          onClick={() => setSidebarOpen(!sidebarOpen)}
          sx={{ height: "2rem" }}
        >
          <MenuIcon />
        </IconButton>
      </StyledFlexBox>
    </>
  );
};

export default Sidebar;
