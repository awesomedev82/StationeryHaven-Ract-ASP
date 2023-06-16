import {
  Typography,
  Button,
  Container,
  Paper,
  Divider,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { baseFlexStyles } from "../muiStyles/flexStyle";
import { minHeight } from "../muiStyles/helper/helper";

const NotFound = () => {
  return (
    <Box
      sx={{
        ...minHeight,
        display: "flex",
        justifyContent: "center",
        paddingTop: "5%",
      }}
    >
      <Container component={Paper} sx={{ height: "65vh", paddingTop: "7px" }}>
        <Typography variant="h3" gutterBottom>
          Oops - we could not find what you are looking for
        </Typography>
        <Divider />
        <Box
          sx={{
            ...baseFlexStyles,
            flexDirection: "column",
            gap: "8vh",
            mt: "8vh",
          }}
        >
          <SentimentDissatisfiedIcon
            sx={{ fontSize: "10rem", color: "#db3838e6" }}
          />
          <Button
            variant="contained"
            component={Link}
            to="/"
            sx={{ width: "15vw" }}
            color="success"
          >
            Go back
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default NotFound;
