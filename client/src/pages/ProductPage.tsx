import ProductList from "../components/product/ProductList";
import { useEffect } from "react";
import Loading from "../components/helper/Loading";
import { Container, Grid, Typography } from "@mui/material";
import Slider from "../components/helper/Slider";
import { useAppDispatch, useAppSelector } from "../redux/store/configureStore";
import { fetchProductsAsync, productsSelectors } from "../redux/productSlice";

const ProductPage = () => {
  const products = useAppSelector(productsSelectors.selectAll);
  const { productsLoaded, status } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!productsLoaded) dispatch(fetchProductsAsync());
  }, [productsLoaded, dispatch]);

  if (status.includes("pending"))
    return <Loading message="Loading products..." />;

  return (
    <>
      <Slider />

      <Container style={{ maxWidth: "1350px" }}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item marginTop="1vh">
            <Typography
              variant="h5"
              sx={{ fontFamily: "Montserrat", fontSize: 30, paddingTop: "13%" }}
            >
              All Products:
            </Typography>
          </Grid>
        </Grid>

        <ProductList products={products} />
      </Container>
    </>
  );
};

export default ProductPage;
