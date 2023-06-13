import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import { Product } from "../../app/models/product";
import { amber, green } from "@mui/material/colors";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Card
      sx={{
        "@media (max-width: 600px)": {
          width: "80%",
        },
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: green[700] }}>
            {product.name.charAt(0).toUpperCase()}
          </Avatar>
        }
        title={product.name}
        titleTypographyProps={{
          sx: { fontWeight: "bold" },
        }}
      />
      <CardMedia
        sx={{
          width: "100%",
          height: 0,
          paddingTop: "100%",
          objectFit: "contain",
          "@media (max-width: 600px)": {
            paddingTop: "100%",
            backgroundSize: "100%",
          },
        }}
        image={product.imageUrl}
        title="product-image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          ${(product.price / 100).toFixed(2)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.brand} / {product.type}
        </Typography>
      </CardContent>

      <CardActions style={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          size="small"
          variant="contained"
          style={{
            backgroundColor: "#f5f5dc",
            color: "rgba(25, 25, 25, 0.67)",
          }}
          component={Link}
          to={`/product/${product.id}`}
        >
          View
        </Button>
        <Button
          size="small"
          variant="contained"
          style={{ backgroundColor: amber[700] }}
          endIcon={<ShoppingCartIcon />}
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
