import { Button, CardActions, Divider, Box } from "@mui/material";
import { Link as RouteLink } from "react-router-dom";
import { Product } from "../../models/product";
import ProductPrice from "./productCard/ProductPrice";
import { useState } from "react";
import agent from "../../api/agent";
import { CardStyle } from "../../muiStyles/product/product.styled";
import ProductImage from "./productCard/ProductImage";
import AddToBasketButton from "./productCard/AddToBasketButton";
import ProductTitle from "./productCard/ProductTitle";
import { useStoreContext } from "../../context/Context";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const { name, price, imageUrl, quantityInStock } = product;
  const { setBasket } = useStoreContext();

  const [loading, setLoading] = useState(false);

  const handleAddItem = (productId: number) => {
    setLoading(true);
    agent.Basket.addItem(productId)
      .then((basket) => setBasket(basket))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

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
          sx={{
            mt: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
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
          loading={loading}
          handleAddItem={() => handleAddItem(product.id)}
        />
      </CardActions>
    </CardStyle>
  );
};

export default ProductCard;
