import { Box, Typography } from "@mui/material";
import BasketSummary from "../basket/BasketSummary";
import BasketTable from "../basketTable/BasketTable";
import { useAppSelector } from "../../redux/store/configureStore";
import {
  calculateDeliveryFee,
  calculateSubtotalCount,
} from "../../util/tableSummaryUtil";

const Review = () => {
  const { basket } = useAppSelector((state) => state.basket);

  const subtotalCount = calculateSubtotalCount(basket?.items || []);

  const deliveryFee = calculateDeliveryFee(subtotalCount);

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      {basket && (
        <>
          <BasketTable items={basket.items} isBasket={false} />
          <Box display="flex" flexDirection="column" alignItems="center">
            <BasketSummary subtotal={subtotalCount} deliveryFee={deliveryFee} />
          </Box>
        </>
      )}
    </>
  );
};

export default Review;
