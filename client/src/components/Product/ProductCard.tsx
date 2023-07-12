import { Button, CardActions, Divider, Box } from "@mui/material";
import { Link as RouteLink } from "react-router-dom";
import { Product } from "../../models/product";
import ProductPrice from "./productCard/ProductPrice";
import { CardStyle } from "../../muiStyles/product/product.styled";
import ProductImage from "./productCard/ProductImage";
import AddToBasketButton from "./productCard/AddToBasketButton";
import ProductTitle from "./productCard/ProductTitle";
import {
  useAppDispatch,
  useAppSelector,
} from "../../redux/store/configureStore";
import { addBasketItemAsync } from "../../redux/basketSlice";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const { status } = useAppSelector((state : any) => state.basket);
  const { name, price, imageUrl, quantityInStock } = product;
  const dispatch = useAppDispatch();

  return (
    <CardStyle>
      <ProductImage
        imageUrl={imageUrl}
        name={name}
        quantityInStock={quantityInStock}
      />

      <Box sx={{ py: 2, px: 3 }}>
        <ProductTitle name={name} productLink={`/product/${product.id}`} />
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            mt: 2,
          }}
        >
          <ProductPrice price={price} />
          <Button
            size="small"
            style={{
              color: "rgb(102, 101, 101)",
            }}
            component={RouteLink}
            to={`/product/${product.id}`}
          >
            View
          </Button>
        </Box>
        <Divider />
      </Box>
      <CardActions style={{ display: "flex", justifyContent: "center" }}>
        <AddToBasketButton
          loading={status.includes("pendingAddItem" + product.id)}
          handleAddItem={() =>
            dispatch(addBasketItemAsync({ productId: product.id }))
          }
        />
      </CardActions>
    </CardStyle>
  );
};

export default ProductCard;
