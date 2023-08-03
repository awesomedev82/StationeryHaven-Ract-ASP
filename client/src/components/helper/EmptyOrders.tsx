import { Button } from "@mui/material";
import { BoxStyle } from "../../muiStyles/basket.styled";
import { Link as RouterLink } from "react-router-dom";
import image from "../../images/3298065.png";
import CustomTitle from "./CustomTitle";

const EmptyOrders = () => {
  return (
    <BoxStyle sx={{ mt: 3 }}>
      <CustomTitle text="Your order list is empty" variant="h3" />
      <img src={image} alt="Empty Order" loading="lazy" />
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
};

export default EmptyOrders;
