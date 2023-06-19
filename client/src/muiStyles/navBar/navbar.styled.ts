import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  height: "100%",
  marginLeft: "5%",
  gap: "8%",
}));

export const StyledFlexBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));
