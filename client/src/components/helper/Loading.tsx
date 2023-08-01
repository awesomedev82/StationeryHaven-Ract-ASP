import { Backdrop, Box, CircularProgress } from "@mui/material";
import { minHeight } from "../../muiStyles/helper/helper";
import { StyledFlexBox } from "../../muiStyles/navbar/navbar.styled";
import CustomTitle from "./CustomTitle";

interface Props {
  message?: string;
  productsLoaded?: boolean;
}

const Loading = ({ message = "Loading...", productsLoaded }: Props) => {
  return (
    <Box minHeight={minHeight}>
      <Backdrop open={true} invisible={true}>
        <StyledFlexBox
          sx={{
            mb: productsLoaded ? "10%" : "0",
            mt: productsLoaded ? "20%" : "0",
          }}
        >
          <CircularProgress size={70} color="secondary" sx={{ mr: "15px" }} />
          <CustomTitle text={message} variant="h4" sx={{ mt: "20px" }} />
        </StyledFlexBox>
      </Backdrop>
    </Box>
  );
};

export default Loading;
