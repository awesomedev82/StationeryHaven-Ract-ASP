import { createBrowserRouter } from "react-router-dom";
import App from "../../app/layout/App";
import HomePage from "../../app/pages/HomePage";
import ProductPage from "../../app/pages/ProductPage";
import ProductDetails from "../product/ProductDetails";
import AboutPage from "../../app/pages/AboutPage";
import ContactPage from "../../app/pages/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "product", element: <ProductPage /> },
      { path: "product/:id", element: <ProductDetails /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
    ],
  },
]);
