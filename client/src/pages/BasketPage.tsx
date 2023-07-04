import { Box, Button, ListItemIcon, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import BasketTable from "../components/helper/BasketTable";
import { useState } from "react";
import agent from "../api/agent";
import ShoppingBagIcon from "../images/shopping-bag.png";
import BasketSummary from "../components/basket/BasketSummary";
import EmptyBasket from "../components/helper/EmptyBasket";
import { useAppDispatch, useAppSelector } from "../redux/store/configureStore";
import { removeItem, setBasket } from "../redux/basketSlice";

const BasketPage = () => {
  const { basket } = useAppSelector((state) => state.basket);
  const dispatch = useAppDispatch();
  const [status, setStatus] = useState({ loading: false, name: "" });

  const handleIncrement = (productId: number, name: string) => {
    setStatus({ loading: true, name: name });
    agent.Basket.addItem(productId)
      .then((basket) => dispatch(setBasket(basket)))
      .catch((e) => console.log(e))
      .finally(() => setStatus({ loading: false, name: "" }));
  };

  const handleDecrement = (productId: number, quantity = 1, name: string) => {
    setStatus({ loading: true, name: name });
    agent.Basket.removeItem(productId, quantity)
      .then(() => dispatch(removeItem({productId, quantity})))
      .catch((e) => console.log(e))
      .finally(() => setStatus({ loading: false, name: "" }));
  };

  const subtotalCount =
    basket?.items.reduce((a, b) => {
      return a + b.price * b.quantity;
    }, 0) ?? 0;

  const deliveryFee = subtotalCount > 9999 ? 0 : 500;

  if (!basket || !basket.items.length) return <EmptyBasket />;

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography gutterBottom variant="h2">
        Your Basket
        <ListItemIcon>
          <img
            src={ShoppingBagIcon}
            alt="Shopping Bag"
            style={{ marginLeft: 10, height: "7vh" }}
          />
        </ListItemIcon>
      </Typography>

      <BasketTable
        items={basket.items}
        addItem={handleIncrement}
        removeItem={handleDecrement}
        status={status}
      />
      <BasketSummary subtotal={subtotalCount} deliveryFee={deliveryFee} />
      <Button
        component={RouterLink}
        to="/checkout"
        variant="contained"
        color="success"
        sx={{ mb: "5%", mt: "1%" }}
      >
        Checkout
      </Button>
    </Box>
  );
};

export default BasketPage;
