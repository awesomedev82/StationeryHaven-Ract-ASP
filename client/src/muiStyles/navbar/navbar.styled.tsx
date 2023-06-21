import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  height: "100%",
  marginLeft: "5%",
  gap: "8%",

  "& h5": {
    color: "inherit",
    textDecoration: "none",
    typography: "p",
    fontSize: "22px",
    textTransform: "capitalize",
    "&:hover": {
      color: "#444444",
    },
  },
}));

export const StyledFlexBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

export const navListStyles = {
  color: "inherit",
  textDecoration: "none",
  typography: "p",
  fontSize: "22px",
  textTransform: "capitalize",
  "&:hover": {
    color: "#444444",
  },
  "&.active": {
    color: "#7b72a1",
    textDecoration: "underline",
  },
};
