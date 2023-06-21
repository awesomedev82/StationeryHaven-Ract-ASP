import { Box, styled } from "@mui/material";

export const BoxStyle = styled(Box)(({ theme }) => ({
  maxWidth: theme.breakpoints.values.sm,
  margin: "0 auto",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  "& img": {
    width: "100%",
    maxWidth: 400,
    objectFit: "cover",
  },
  "& .MuiButton-root": {
    backgroundColor: "rgb(1, 161, 81)",
    color: "#fff",
    marginTop: 20,
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "#167312cd",
    },
  },
}));
