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
        title={product.name}
        titleTypographyProps={{
          sx: { fontSize: "20px", fontFamily: "Montserrat" },
        }}
        sx={{ backgroundColor: "#c2d5ed44" }}
      />
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
        <Button
          size="small"
          variant="contained"
          style={{ backgroundColor: green[700] }}
          endIcon={<ShoppingCartIcon />}
        >
          Add
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
