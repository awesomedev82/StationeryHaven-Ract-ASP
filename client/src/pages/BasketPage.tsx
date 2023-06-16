import { useEffect, useState } from "react";
import { Basket } from "../models/basket";
import agent from "../api/agent";
import Loading from "../components/helper/Loading";
import { Typography } from "@mui/material";
import { minHeight } from "../muiStyles/helper/helper";

const BasketPage = () => {
  const [loading, setLoading] = useState(true);
  const [basket, setBasket] = useState<Basket | null>(null);

  useEffect(() => {
    agent.Basket.get()
      .then((basket) => setBasket(basket))
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loading message="Loading basket" />;

  if (!basket)
    return <Typography variant="h3">Your basket is empty</Typography>;

  return (
    <div style={minHeight}>
      <h1 style={{marginTop: 0, paddingTop: "5vh"}}>buyerId = {basket.buyerId}</h1>
    </div>
  );
};

export default BasketPage;
