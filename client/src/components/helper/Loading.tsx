import { Backdrop, Box, CircularProgress } from "@mui/material";
import { minHeight } from "../../muiStyles/helper/helper";
import { StyledFlexBox } from "../../muiStyles/navbar/navbar.styled";
import CustomTitle from "./Title";

interface Props {
  message?: string;
}

const Loading = ({ message = "Loading..." }: Props) => {
  return (
    <Box minHeight={minHeight}>
      <Backdrop open={true} invisible={true}>
        <StyledFlexBox sx={{ mb: "10%" }}>
          <CircularProgress size={70} color="secondary" sx={{ mr: "15px" }} />
          <CustomTitle text={message} variant="h4" sx={{ mt: "20px" }} />
        </StyledFlexBox>
      </Backdrop>
    </Box>
  );
};

export default Loading;
