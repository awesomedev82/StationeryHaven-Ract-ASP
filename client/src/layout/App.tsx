import Navbar from "./Navbar";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";
import ContainerWithoutMargins from "./ContainerWithoutMargins";
import ContainerWithMargins from "./ContainerWithMargins";
import { useStoreContext } from "../context/Context";
import { getCookie } from "../util/util";
import agent from "../api/agent";
import Loading from "../components/helper/Loading";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const { setBasket } = useStoreContext();

  useEffect(() => {
    const buyerId = getCookie("buyerId");

    if (buyerId) {
      setLoading(true);
      agent.Basket.get()
        .then((basket) => setBasket(basket))
        .catch((e) => console.log(e))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [setBasket]);

  const paletteType = darkMode ? "dark" : "light";
  const theme = createTheme({
    palette: {
      mode: paletteType,
      success: {
        main: "rgb(1, 161, 81)",
      },
      background: {
        default: paletteType === "light" ? "#dfdede6e" : "#121212",
      },
    },
  });

  const handleChange = () => {
    setDarkMode(!darkMode);
  };

  if (loading && location.pathname === "/basket")
    return <Loading message="Loading basket..." />;

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
