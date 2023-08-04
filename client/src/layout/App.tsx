import Navbar from "./Navbar";
import {
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { Suspense, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
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
import { ToastContainer } from "react-toastify";

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const buyerId = getCookie("buyerId");

    if (buyerId) {
      setLoading(true);
      agent.Basket.get()
        .then((basket) => {
          if (basket !== null) {
            dispatch(setBasket(basket));
          }
        })
        .catch((e) => console.log(e))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [dispatch]);

  const theme = createTheme({
    palette: {
      mode: "light",
      success: {
        main: "rgb(1, 161, 81)",
      },
      background: {
        default: "#dfdede6e",
      },
    },
  });

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
        <Suspense fallback={<div>Loading...</div>}></Suspense>
        <CssBaseline />
        <Navbar theme={theme} />
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
