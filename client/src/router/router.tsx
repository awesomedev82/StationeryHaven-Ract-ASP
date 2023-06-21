import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import ProductPage from "../pages/ProductPage";
import ProductDetails from "../components/product/ProductDetails";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import ErrorPage from "../pages/ErrorPage";
import ServerError from "../errors/ServerError";
import NotFound from "../pages/NotFound";
import BasketPage from "../pages/BasketPage";
import CheckoutPage from "../pages/CheckoutPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <ProductPage /> },
      { path: "product/:id", element: <ProductDetails /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "error", element: <ErrorPage /> },
      { path: "server-error", element: <ServerError /> },
      { path: "not-found", element: <NotFound /> },
      { path: "basket", element: <BasketPage /> },
      { path: "checkout", element: <CheckoutPage /> },
      { path: "*", element: <Navigate replace to="not-found" /> },
    ],
  },
]);
