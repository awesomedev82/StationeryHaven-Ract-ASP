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
import Sidebar from "../components/helper/Sidebar";
import { ReactComponent as Icon } from "../images/result.svg";
import {
  StyledBox,
  StyledFlexBox,
  navListStyles,
} from "../muiStyles/navbar/navbar.styled";
import { useAppSelector } from "../redux/store/configureStore";

interface Props {
  theme: Theme;
}

const Navbar = ({ theme }: Props) => {
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const { basket } = useAppSelector((state) => state.basket);

  const itemCount = basket?.items.reduce((a, b) => {
    return a + b.quantity;
  }, 0);

  return (
    <AppBar
      position="sticky"
      style={{
        color: "#000000",
        background: "#ffffff",
        height: "var(--navbar-height)",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <StyledBox>
          <Typography
            variant="h5"
            sx={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              justifyContent: "center",
              marginLeft: 0,
            }}
            component={Link}
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
                  sx={navListStyles}
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
                sx={{ width: "40px", mr: 2 }}
              >
                <Badge badgeContent={itemCount} color="success">
                  <ShoppingCart style={{ color: "#1281a0" }} />
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
