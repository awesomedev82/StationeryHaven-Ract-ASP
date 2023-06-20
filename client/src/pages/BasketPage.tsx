import {
  Box,
  Button,
  Container,
  ListItemIcon,
  Typography,
} from "@mui/material";
import { minHeight } from "../muiStyles/helper/helper";
import { useStoreContext } from "../context/Context";
import { Link as RouterLink } from "react-router-dom";
import image from "../images/pngwing.com (9).png";
import BasketTable from "../components/helper/BasketTable";
import { BoxStyle } from "../muiStyles/basket.styled";
import { useState } from "react";
import agent from "../api/agent";
import ShoppingBagIcon from "../images/shopping-bag.png";

const BasketPage = () => {
  const { basket, setBasket, removeItem } = useStoreContext();
  const [status, setStatus] = useState({ loading: false, name: "" });

  const handleIncrement = (productId: number, name: string) => {
    setStatus({ loading: true, name: name });
    agent.Basket.addItem(productId)
      .then((basket) => setBasket(basket))
      .catch((e) => console.log(e))
      .finally(() => setStatus({ loading: false, name: "" }));
  };

  const handleDecrement = (productId: number, quantity = 1, name: string) => {
    setStatus({ loading: true, name: name });
    agent.Basket.removeItem(productId, quantity)
      .then(() => removeItem(productId, quantity))
      .catch((e) => console.log(e))
      .finally(() => setStatus({ loading: false, name: "" }));
  };

  if (!basket || !basket.items.length)
    return (
      <BoxStyle>
        <Typography variant="h4">Your basket is empty</Typography>
        <img src={image} alt="404 Error" loading="lazy" />
        <Button
          to="/"
          variant="contained"
          component={RouterLink}
          size="large"
          disableElevation
        >
          Go to Product
        </Button>
      </BoxStyle>
    );

  return (
    <Container>
      <Box minHeight={minHeight}>
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
      </Box>
    </Container>
  );
};

export default BasketPage;
