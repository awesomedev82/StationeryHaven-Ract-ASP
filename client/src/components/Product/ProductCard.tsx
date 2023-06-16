import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import { Product } from "../../models/product";
import { green } from "@mui/material/colors";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useState } from "react";
import agent from "../../api/agent";
import { LoadingButton } from "@mui/lab";

interface Props {
  product: Product;
  productRandom?: boolean;
}

const ProductCard = ({ product, productRandom }: Props) => {
  const [loading, setLoading] = useState(false);

  const handleAddItem = (productId: number) => {
    setLoading(true);
    agent.Basket.addItem(productId)
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  return (
    <Card
      sx={{
        "@media (max-width: 600px)": {
          width: "80%",
        },
      }}
    >
      <CardHeader
        title={product.name}
        titleTypographyProps={{
          sx: { fontSize: "20px", fontFamily: "Montserrat" },
        }}
        sx={{ backgroundColor: "#c2d5ed44" }}
      />
      {productRandom && (
        <CardMedia
          sx={{
            width: "100%",
            height: 0,
            paddingTop: "80%",
            objectFit: "cover",
          }}
          image={product.imageUrl}
          title="product-image"
          component={Link}
          to={`/product/${product.id}`}
        />
      )}
      {!productRandom && (
        <CardMedia
          sx={{
            width: "100%",
            height: 0,
            paddingTop: "85%",
            objectFit: "cover",
          }}
          image={product.imageUrl}
          title="product-image"
        />
      )}
      {!productRandom && (
        <>
          <CardContent>
            <Typography gutterBottom variant="h5">
              ${(product.price / 100).toFixed(2)}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.brand} / {product.type}
            </Typography>
          </CardContent>

          <CardActions
            style={{ display: "flex", justifyContent: "center", gap: "6%" }}
          >
            <Button
              size="small"
              variant="contained"
              style={{
                backgroundColor: "#4e4e4d",
                color: "rgb(245, 242, 242)",
              }}
              component={Link}
              to={`/product/${product.id}`}
            >
              View
            </Button>
            <LoadingButton
              loading={loading}
              onClick={() => handleAddItem(product.id)}
              size="small"
              variant="contained"
              style={{ backgroundColor: green[700] }}
              endIcon={<ShoppingCartIcon />}
            >
              Add
            </LoadingButton>
          </CardActions>
        </>
      )}
    </Card>
  );
};

export default ProductCard;
