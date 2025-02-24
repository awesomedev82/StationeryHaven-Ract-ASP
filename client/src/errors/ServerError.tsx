import { Container, Divider, Paper, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

const ServerError = () => {
  const { state } = useLocation();

  return (
    <Container component={Paper} sx={{ mt: "2%", mb: "2%" }}>
      {state?.error ? (
        <>
          <Typography
            gutterBottom
            variant="h3"
            color="secondary"
            sx={{ paddingTop: 1.5 }}
          >
            Problem with connection to the server. Please check your internet
            connection or try again later.
          </Typography>
          <Divider />
          <Typography
            variant="body1"
            style={{ wordWrap: "break-word", paddingTop: "5px" }}
          >
            {state.error.detail || "Internal server error"}
          </Typography>
        </>
      ) : (
        <Typography variant="h5" gutterBottom>
          Server error
        </Typography>
      )}
    </Container>
  );
};

export default ServerError;
