import { Button } from "@mui/material";
import { BoxStyle } from "../../muiStyles/basket.styled";
import { Link as RouterLink } from "react-router-dom";
import image from "../../images/pngwing.com (9).png";
import CustomTitle from "./Title";

const EmptyBasket = () => {
  return (
    <BoxStyle sx={{ mt: 3 }}>
      <CustomTitle text="Your basket is empty" variant="h3" />
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
};

export default EmptyBasket;
