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
import { minHeight } from "../muiStyles/helper/helper";
import { StyledFlexBox } from "../muiStyles/navBar/navbar.styled";

const NotFound = () => {
  return (
    <Box
      sx={{
        ...minHeight,
        display: "flex",
        justifyContent: "center",
        paddingTop: "3%",
      }}
    >
      <Container
        component={Paper}
        maxWidth="sm"
        sx={{
          height: "auto",
          maxHeight: "55vh",
          padding: "1rem",
          pb: "none",
          "@media (max-width: 600px)": {
            maxHeight: "65vh",
          },
        }}
      >
        <Typography variant="h3" gutterBottom style={{ marginBottom: "5px" }}>
          Oops - we could not find what you are looking for
        </Typography>
        <Divider />
        <StyledFlexBox
          sx={{
            flexDirection: "column",
            gap: "4vh",
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
        </StyledFlexBox>
      </Container>
    </Box>
  );
};

export default NotFound;
