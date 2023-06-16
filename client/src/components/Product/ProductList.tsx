import { Box, Grid } from "@mui/material";
import { Product } from "../../models/product";
import ProductCard from "./ProductCard";

interface Props {
  products: Product[];
}

const ProductList = ({ products }: Props) => {

  return (
    <>
      <Grid container spacing={4} sx={{ mt: 4, mb: 4 }}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="100%"
        >
          <h1 style={{ marginTop: "0", fontFamily: "Arial", fontSize: "28px" }}>All Products</h1>
        </Box>
        {products.map((product: Product) => (
          <Grid
            item
            xs={13}
            sm={6}
            md={4}
            lg={3}
            key={product.id}
            sx={{
              "@media (max-width: 600px)": {
                display: "flex",
                justifyContent: "center",
              },
            }}
          >
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ProductList;
