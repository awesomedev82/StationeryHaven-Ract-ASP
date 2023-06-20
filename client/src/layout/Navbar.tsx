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
import { useStoreContext } from "../context/Context";

interface Props {
  darkMode: boolean;
  handleChange: () => void;
  theme: Theme;
}

const Navbar = ({ darkMode, theme }: Props) => {
  const backgroundColor = darkMode ? "#242323" : "#ffffff";
  const text = darkMode ? "#ffffff" : "#000000";
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const { basket } = useStoreContext();
  const itemCount = basket?.items.reduce((a, b) => {
    return a + b.quantity;
  }, 0);

  return (
    <AppBar
      position="sticky"
      style={{
        background: backgroundColor,
        color: text,
        height: "var(--navbar-height)",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
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
              marginLeft: 0
            }}
            component={NavLink}
            to="/"
          >
            <Icon
              height={180}
              style={{
                maxWidth: "100%",
                maxHeight: "160%",
                marginBottom: "35%",
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
                <Badge badgeContent={itemCount} color="success">
                  <ShoppingCart style={{color: "#1281a0"}}/>
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
