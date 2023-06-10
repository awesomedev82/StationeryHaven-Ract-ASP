import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../app/layout/App";
import ProductPage from "../app/pages/ProductPage";
import ProductDetails from "../components/product/ProductDetails";
import AboutPage from "../app/pages/AboutPage";
import ContactPage from "../app/pages/ContactPage";
import ErrorPage from "../app/pages/ErrorPage";
import ServerError from "../errors/ServerError";
import NotFound from "../errors/NotFound";

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
      { path: "*", element: <Navigate replace to="not-found" /> },
    ],
  },
]);
