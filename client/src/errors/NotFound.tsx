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

const NotFound = () => {
  return (
    <Container component={Paper} sx={{ height: "70vh" }}>
      <Typography gutterBottom variant="h3">
        Oops - we could not find what are you looking for
      </Typography>
      <Divider />
      <Box
        sx={{
          ...baseFlexStyles,
          flexDirection: "column",
          gap: "8vh",
          marginTop: "8vh",
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
  );
};

export default NotFound;
