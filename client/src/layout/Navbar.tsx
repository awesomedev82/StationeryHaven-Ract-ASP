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
import { NavLink, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const { basket } = useAppSelector((state) => state.basket);

  const itemCount =
    basket?.items?.reduce((a, b) => {
      return a + b.quantity;
    }, 0) || 0;

  const handleLogoClick = (event: React.MouseEvent) => {
    event.preventDefault();
    navigate("/");
  };

  const DesktopNavbar = ({ links, itemCount }: any) => {
    return (
      <>
        <List sx={{ display: "flex" }}>
          {links.map(({ title, path }: any) => (
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
            component={NavLink}
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

          <NavLink to="/order" style={{ textDecoration: "none" }}>
            <Typography
              variant="h6"
              sx={{
                color: "rgb(18, 129, 160)",
                marginRight: "6px",
                cursor: "pointer",
                fontFamily: "Montserrat",
              }}
            >
              Orders
            </Typography>
          </NavLink>
        </StyledFlexBox>
      </>
    );
  };
  const MobileNavbar = () => {
    return <Sidebar />;
  };

  return (
    <AppBar
      position="sticky"
      style={{
        color: "#000000",
        background: "#ffffff",
        height: "var(--navbar-height)",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <StyledBox sx={{ cursor: "pointer" }}>
          <Icon
            height={130}
            style={{
              maxWidth: "100%",
              marginBottom: "35%",
            }}
            onClick={handleLogoClick}
            cursor="pointer"
          />
        </StyledBox>

        {!isMatch && <DesktopNavbar links={links} itemCount={itemCount} />}

        {isMatch && <MobileNavbar />}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
