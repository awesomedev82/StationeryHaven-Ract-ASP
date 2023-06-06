import {
  AppBar,
  Badge,
  Box,
  IconButton,
  List,
  ListItem,
  Switch,
  Theme,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { links, registrationLink } from "../lib/constants";
import { ShoppingCart } from "@mui/icons-material";
import { navStyles } from "../muiStyles/navStyle";
import Sidebar from "./Sidebar";

interface Props {
  darkMode: boolean;
  handleChange: () => void;
  theme: Theme;
}

const Navbar = ({ darkMode, handleChange, theme }: Props) => {
  const backgroundColor = darkMode ? "#242323" : "#4eaa51";
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar
      position="static"
      style={{
        background: backgroundColor,
        boxShadow: "none",
      }}
      sx={{ mb: 4 }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="h5"
            sx={{ ...navStyles, mr: 1 }}
            component={NavLink}
            to="/"
          >
            Stationery Heaven
          </Typography>
          {!isMatch && <Switch onChange={handleChange} />}
        </Box>

        {!isMatch && (
          <>
            <List sx={{ display: "flex" }}>
              {links.map(({ title, path }) => (
                <ListItem
                  key={path}
                  component={NavLink}
                  to={path}
                  sx={navStyles}
                >
                  {title}
                </ListItem>
              ))}
            </List>

            {/* <List sx={{ display: "flex" }}>
              {registrationLink.map(({ title, path }) => (
                <ListItem
                  key={path}
                  component={NavLink}
                  to={path}
                  sx={navStyles}
                >
                  {title}
                </ListItem>
              ))}
            </List> */}

            <Box sx={{ display: "flex", alignItems: "center" }}>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  sx={{ mr: 2 }}
                >
                  <Badge badgeContent="4" color="success">
                    <ShoppingCart />
                  </Badge>
                </IconButton>
            </Box>
          </>
        )}

        {isMatch && <Sidebar />}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
