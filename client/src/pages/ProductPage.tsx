import { Product } from "../models/product";
import ProductList from "../components/product/ProductList";
import { useState, useEffect } from "react";
import Loading from "../components/Loading";
import agent from "../api/agent";
import img from "../images/colorful-stationery-multicolored-background_1623598949.jpg";
import { Box, Container } from "@mui/material";

const ProductPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    agent.Product.list()
      .then((products) => setProducts(products))
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  const Slider = () => {
    return (
      <Box>
        <img
          src={img}
          style={{
            width: "100%",
            height: "35vh",
            objectFit: "cover",
            marginBottom: "3%",
          }}
          alt="slider"
        />
      </Box>
    );
  };

  if (loading) return <Loading message="Loading products..." />;

  return (
    <>
      <Slider />
      <Container style={{ maxWidth: "1350px" }}>
        <ProductList products={products} />
      </Container>
    </>
  );
};

export default ProductPage;
