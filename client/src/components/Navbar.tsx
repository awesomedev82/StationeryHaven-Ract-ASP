import {
  AppBar,
  Badge,
  Box,
  IconButton,
  List,
  ListItem,
  Theme,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { links } from "../lib/constants";
import { ShoppingCart } from "@mui/icons-material";
import { navStyles, navStylesForLogo } from "../muiStyles/navStyle";
import Sidebar from "./Sidebar";
import { baseFlexStyles } from "../muiStyles/flexStyle";
import { ReactComponent as Icon } from "../images/result.svg";

interface Props {
  darkMode: boolean;
  handleChange: () => void;
  theme: Theme;
}

const Navbar = ({ darkMode, theme }: Props) => {
  const backgroundColor = darkMode ? "#242323" : "#ffffff";
  const text = darkMode ? "#ffffff" : "#000000";
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar
      position="static"
      style={{
        background: backgroundColor,
        boxShadow: "none",
        color: text,
        height: "var(--navbar-height)",
      }}
    >
      <Toolbar
        sx={{
          ...baseFlexStyles,
          height: "100%",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            ...baseFlexStyles,
            height: "100%",
            display: "flex",
            gap: "8%",
            marginLeft: "5%",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              ...navStylesForLogo,
              ...baseFlexStyles,
              height: "100%",
              justifyContent: "center",
            }}
            component={NavLink}
            to="/"
          >
            <Icon
              height={180}
              style={{
                maxWidth: "100%",
                maxHeight: "165%",
                marginBottom: "35%",
                marginLeft: "5%",
              }}
            />
          </Typography>
          {/* {!isMatch && <Switch onChange={handleChange} />} */}
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
                  style={{ fontFamily: "Montserrat" }}
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

            <Box sx={{ ...baseFlexStyles }}>
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
