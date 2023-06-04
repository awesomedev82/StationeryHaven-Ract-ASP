import { AppBar, Toolbar, Typography } from "@mui/material";
import { ReactComponent as ReactLogo } from "../image/stationery-11.svg";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#282626",
    },
  },
});

const Navbar = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" color="primary" sx={{mb: 4}}>
        <Toolbar>
          <Typography variant="h5">Stationery Heaven</Typography>
          <ReactLogo style={{ height: "4vh", paddingLeft: "1%" }} />
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Navbar;
