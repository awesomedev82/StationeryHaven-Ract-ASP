import { Box, styled } from "@mui/material";
import { minHeight } from "./helper/helper";

export const BoxStyle = styled(Box)(({ theme }) => ({
  maxWidth: theme.breakpoints.values.sm,
  ...minHeight,
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
    backgroundColor: "#198416cd",
    color: "#fff",
    marginTop: 20,
  },
}));