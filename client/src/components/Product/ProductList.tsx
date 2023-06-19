import { Grid, styled } from "@mui/material";
import { Product } from "../../models/product";
import ProductListItem from "./ProductCard";

const GridStyle = styled(Grid)(({ theme }) => ({
  marginTop: 1,
  marginBottom: theme.spacing(5),
  justifyContent: "center", 
}));

interface Props {
  products: Product[];
}

const ProductList = ({products} : Props) => {
  return (
    <GridStyle container spacing={5}>
      {products.map((product) => (
        <Grid key={product.id} item xs={9} sm={6} md={4} lg={3}>
          <ProductListItem key={product.id} product={product} />
        </Grid>
      ))}
    </GridStyle>
  );
};

export default ProductList;