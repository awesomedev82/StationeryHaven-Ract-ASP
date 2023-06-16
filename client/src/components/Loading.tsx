import { Backdrop, Box, CircularProgress, Typography } from "@mui/material";
import { baseFlexStyles } from "../muiStyles/flexStyle";
import { minHeightDetails } from "../muiStyles/helper/helper";

interface Props {
  message?: string;
}

const Loading = ({ message = "Loading..." }: Props) => {
  return (
    <Box
      minHeight={`calc(${minHeightDetails.minHeight} + 1vh)`}
    >
      <Backdrop open={true} invisible={true}>
        <Box {...baseFlexStyles} sx={{ marginBottom: "10%" }}>
          <CircularProgress
            size={70}
            color="secondary"
            sx={{ marginRight: "15px" }}
          />
          <Typography variant="h4" sx={{ marginTop: "20px" }}>
            {message}
          </Typography>
        </Box>
      </Backdrop>
    </Box>
  );
};

export default Loading;
