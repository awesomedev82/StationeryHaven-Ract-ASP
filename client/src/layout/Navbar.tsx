import {
  AppBar,
  Badge,
  IconButton,
  List,
  ListItem,
  Theme,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { links } from "../lib/constants";
import { ShoppingCart } from "@mui/icons-material";
import { navStyles, navStylesForLogo } from "../muiStyles/navbar/navStyle";
import Sidebar from "../components/helper/Sidebar";
import { ReactComponent as Icon } from "../images/result.svg";
import { StyledBox, StyledFlexBox } from "../muiStyles/navbar/navbar.styled";

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
          display: "flex",
          alignItems: "center",
          height: "100%",
          justifyContent: "space-between",
        }}
      >
        <StyledBox>
          <Typography
            variant="h5"
            sx={{
              ...navStylesForLogo,
              display: "flex",
              alignItems: "center",
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
        </StyledBox>

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

            <StyledFlexBox>
              <IconButton
                component={Link}
                to="/basket"
                size="large"
                edge="start"
                color="inherit"
                sx={{ mr: 2 }}
              >
                <Badge badgeContent="4" color="success">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </StyledFlexBox>
          </>
        )}

        {isMatch && <Sidebar />}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
