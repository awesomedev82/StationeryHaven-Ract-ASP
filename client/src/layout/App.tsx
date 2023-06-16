import Navbar from "./Navbar";
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";
import ContainerWithoutMargins from "./ContainerWithoutMargins";
import ContainerWithMargins from "./ContainerWithMargins";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  const paletteType = darkMode ? "dark" : "light";

  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === "light" ? "#eaeaea" : "#121212",
      },
    },
  });

  const handleChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <ToastContainer
          position="bottom-right"
          hideProgressBar
          theme="colored"
        />
        <CssBaseline />
        <Navbar darkMode={darkMode} handleChange={handleChange} theme={theme} />
        {location.pathname === "/" ? (
          <ContainerWithoutMargins>
            <Outlet />
          </ContainerWithoutMargins>
        ) : (
          <ContainerWithMargins>
            <Outlet />
          </ContainerWithMargins>
        )}
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
