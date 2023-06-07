import { Box, CircularProgress } from "@mui/material";

const Loading = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" mt="10%">
      <CircularProgress color="secondary" />
    </Box>
  );
};

export default Loading;
