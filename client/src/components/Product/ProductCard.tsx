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
import { green } from "@mui/material/colors";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Card>
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
          width: '100%',
          height: 0,
          paddingTop: '80%',
          objectFit: 'cover',
          "@media (max-width: 600px)": {
            paddingTop: '83%',
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
      <CardActions>
        <Button size="small" variant="contained">
          Add to cart
        </Button>
        <Button size="small" variant="contained">
          View
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
