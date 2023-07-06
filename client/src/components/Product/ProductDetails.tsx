import { ChangeEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../models/product";
import Loading from "../helper/Loading";
import NotFound from "../../pages/NotFound";
import { Divider, Grid, TextField } from "@mui/material";
import agent from "../../api/agent";
import ProductTable from "../helper/Table";
import { LoadingButton } from "@mui/lab";
import CustomTitle from "../helper/CustomTitle";
import {
  useAppDispatch,
  useAppSelector,
} from "../../redux/store/configureStore";
import { addBasketItemAsync, removeBasketItemAsync } from "../../redux/basketSlice";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { basket, status } = useAppSelector((state) => state.basket);
  const dispatch = useAppDispatch();

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(0);

  const item = basket?.items.find((i) => i.productId === product?.id);

  useEffect(() => {
    if (item) setQuantity(item.quantity);
    id &&
      agent.Product.details(id)
        .then((res) => setProduct(res))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
  }, [id, item]);

  if (loading) return <Loading message="Loading product..." />;

  if (!product) return <NotFound />;

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = parseInt(e.target.value);
    if (!isNaN(inputValue) && inputValue >= 0) {
      setQuantity(inputValue);
    }
  };

  const handleUpdateCart = () => {
    if (!item || quantity > item.quantity) {
      const updatedQuantity = item ? quantity - item.quantity : quantity;
      dispatch(
        addBasketItemAsync({
          productId: product?.id!,
          quantity: updatedQuantity,
        })
      );
    } else {
      const updatedQuantity = item.quantity - quantity;
      dispatch(
        removeBasketItemAsync({
          productId: product?.id!,
          quantity: updatedQuantity,
        })
      );
    }
  };

  return (
    <Grid container spacing={6} sx={{ mt: 0, mb: 0, px: "5%" }}>
      <Grid item xs={12} sm={6}>
        <img
          src={product.imageUrl}
          alt={product.name}
          style={{
            width: "100%",
            maxHeight: "60vh",
            boxShadow: `0px 0px 4px rgba(145, 158, 171, 0.24), 0px 4px 8px -4px rgba(145, 158, 171, 0.24)`,
            borderRadius: "1%",
            objectFit: "cover",
          }}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <CustomTitle
          text={product.name}
          variant="h3"
          sx={{ fontFamily: "Arial", fontSize: "26px" }}
        />
        <Divider sx={{ mb: 2 }} />

        <ProductTable product={product} />

        <Grid container spacing={2}>
          <Grid item xs={6} sx={{ mb: 3 }}>
            <TextField
              variant="outlined"
              type="number"
              label="Quantity in Cart"
              value={quantity}
              onChange={handleInput}
              sx={{ mt: 2, pb: "13%" }}
            />
          </Grid>
          <Grid item xs={6}>
            <LoadingButton
              disabled={
                item?.quantity === quantity || (!item && quantity === 0)
              }
              loading={status.includes("pending" + product.id)}
              onClick={handleUpdateCart}
              sx={{ height: "55px", mt: 2 }}
              color="success"
              size="medium"
              variant="contained"
              fullWidth
            >
              {item ? "Update Quantity" : "Add to Cart"}
            </LoadingButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProductDetails;
