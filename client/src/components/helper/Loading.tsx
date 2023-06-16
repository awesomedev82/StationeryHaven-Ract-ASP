import { Backdrop, Box, CircularProgress, Typography } from "@mui/material";
import { baseFlexStyles } from "../../muiStyles/flexStyle";
import { minHeight } from "../../muiStyles/helper/helper";

interface Props {
  message?: string;
}

const Loading = ({ message = "Loading..." }: Props) => {
  return (
    <Box
      minHeight={minHeight}
    >
      <Backdrop open={true} invisible={true}>
        <Box {...baseFlexStyles} sx={{ mb: "10%" }}>
          <CircularProgress
            size={70}
            color="secondary"
            sx={{ mr: "15px" }}
          />
          <Typography variant="h4" sx={{ mt: "20px" }}>
            {message}
          </Typography>
        </Box>
      </Backdrop>
    </Box>
  );
};

export default Loading;
