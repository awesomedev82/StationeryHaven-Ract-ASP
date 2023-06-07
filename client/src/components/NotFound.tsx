import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

interface Props {
  text: string;
}

const NotFound = ({ text }: Props) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      mt="13%"
      flexDirection="column"
      gap="25px"
    >
      <Typography variant="h4">
        {text} Not Found <SentimentDissatisfiedIcon />
      </Typography>
      <Button variant="contained" color="primary" component={Link} to={"/"}>
        Go Back
      </Button>
    </Box>
  );
};

export default NotFound;
