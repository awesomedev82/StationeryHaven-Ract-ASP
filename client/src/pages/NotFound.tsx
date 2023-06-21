import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import image from "../images/3814346.png";
import CustomTitle from "../components/helper/Title";

const BoxStyle = styled(Box)(({ theme }) => ({
  maxWidth: theme.breakpoints.values.sm,
  margin: "0 auto",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  "& h4": {
    paddingTop: "1vh",
    marginBottom: "2vh",
  },

  "& img": {
    width: "100%",
    maxWidth: 400,
    objectFit: "cover",
  },
  "& .MuiButton-root": {
    backgroundColor: "#198416cd",
    color: "#fff",
    marginTop: 20,
  },

  [theme.breakpoints.down("sm")]: {
    "& .MuiTypography-h3": { fontSize: 30, fontWeight: 500 },
  },
}));

const ErrorPage = () => {
  return (
    <>
      <BoxStyle>
        <CustomTitle text="Sorry, page not found!" variant="h4" />
        <img src={image} alt="404 Error" loading="lazy" />
        <Button
          to="/"
          variant="contained"
          component={RouterLink}
          size="large"
          disableElevation
        >
          Go to Home
        </Button>
      </BoxStyle>
    </>
  );
};

export default ErrorPage;
