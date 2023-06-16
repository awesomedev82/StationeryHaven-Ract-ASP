import { Grid, Box } from "@mui/material";
import { Product } from "../../models/product";
import ProductCard from "./ProductCard";
import StarIcon from "@mui/icons-material/Star";

interface Props {
  products: any;
}

const ProductRandom = ({ products }: Props) => {

  const getRandomProducts = (count: number) => {
    const random: number[] = [];
    while (random.length < count) {
      const randomIndex = Math.floor(Math.random() * products.length);
      if (!random.includes(randomIndex)) {
        random.push(randomIndex);
      }
    }

    const randomProducts = random.map((index) => products[index]);
    return randomProducts;
  };

  const randomProducts = getRandomProducts(3);

  return (
    <Grid container sx={{ mb: 0 }}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="100%"
      >
        <h1 style={{ marginTop: "0", fontFamily: "Arial", fontSize: "28px" }}>
          Best Choice <StarIcon style={{ color: "orange" }} />
        </h1>
      </Box>
      <Grid
        container
        spacing={4}
        sx={{
          justifyContent: "center",
          "@media (max-width: 600px)": {
            alignItems: "center",
          },
        }}
      >
        {randomProducts.map((randomProduct: Product) => (
          <Grid
            item
            xs={13}
            sm={5}
            md={5} 
            lg={3}
            key={randomProduct.id}
            sx={{
              "@media (max-width: 600px)": {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
            }}
          >
            <ProductCard product={randomProduct} productRandom/>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default ProductRandom;
