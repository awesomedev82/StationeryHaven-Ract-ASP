import { Typography, Button } from "@mui/material";
import { BoxStyle } from "../../muiStyles/basket.styled";
import { Link as RouterLink } from "react-router-dom";
import image from "../../images/pngwing.com (9).png";

const EmptyBasket = () => {
  return (
    <BoxStyle sx={{ mt: 3 }}>
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
};

export default EmptyBasket;
