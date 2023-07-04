import { Box } from "@mui/material";
import CustomTitle from "../components/helper/CustomTitle";

const CheckoutPage = () => {
  return (
    <Box sx={{ pt: 3 }}>
      <CustomTitle
        text="Only logged in users should be able to see this!"
        variant="h3"
      />
    </Box>
  );
};

export default CheckoutPage;
