import Navbar from "../components/Navbar";
import {
  Box,
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isProductsPage, setIsProductsPage] = useState(true);
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

  useEffect(() => {
    if (location.pathname === "/") {
      setIsProductsPage(true);
    } else {
      setIsProductsPage(false);
    }
  }, [location]);

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
        {isProductsPage && (
          <Container
            disableGutters={true}
            style={{ margin: 0, maxWidth: "100vw" }}
          >
            <Outlet />
          </Container>
        )}
        {!isProductsPage && (
          <Container>
            <Outlet />
          </Container>
        )}
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
