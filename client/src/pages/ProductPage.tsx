import { Product } from "../models/product";
import ProductList from "../components/product/ProductList";
import { useState, useEffect } from "react";
import Loading from "../components/helper/Loading";
import agent from "../api/agent";
import { Container, Grid, Typography } from "@mui/material";
import Slider from "../components/helper/Slider";

const ProductPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    agent.Product.list()
      .then((products) => setProducts(products))
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loading message="Loading products..." />;

  return (
    <>
      <Slider />

      <Container style={{ maxWidth: "1350px" }}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item marginTop="1vh">
            <Typography variant="h5" sx={{fontFamily: "Montserrat", fontSize: 30}}>All Products:</Typography>
          </Grid>
        </Grid>

        <ProductList products={products} />
      </Container>
    </>
  );
};

export default ProductPage;
