import { AppBar, Box, Switch, Toolbar, Typography } from "@mui/material";
import { ReactComponent as ReactLogo } from "../image/stationery-11.svg";

interface Props {
  darkMode: boolean;
  handleChange: () => void;
}

const Navbar = ({ darkMode, handleChange }: Props) => {
  const backgroundColor = darkMode ? "#242323" : "#3f9844";

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
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", marginLeft: "8%" }}>
          <Typography variant="h5" sx={{ mr: 1 }}>
            Stationery Heaven
          </Typography>
          <ReactLogo style={{ height: "4vh" }} />
        </Box>
        <Switch onChange={handleChange} />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
