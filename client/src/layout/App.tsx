import Navbar from "./Navbar";
import {
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";
import ContainerWithoutMargins from "./ContainerWithoutMargins";
import ContainerWithMargins from "./ContainerWithMargins";
import { getCookie } from "../util/util";
import agent from "../api/agent";
import Loading from "../components/helper/Loading";
import { minHeight } from "../muiStyles/helper/helper";
import { useAppDispatch } from "../redux/store/configureStore";
import { setBasket } from "../redux/basketSlice";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const buyerId = getCookie("buyerId");

    if (buyerId) {
      setLoading(true);
      agent.Basket.get()
        .then((basket) => dispatch(setBasket(basket)))
        .catch((e) => console.log(e))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [dispatch]);

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
            <Container sx={{ ...minHeight, pt: 3 }}>
              <Outlet />
            </Container>
          </ContainerWithMargins>
        )}
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
