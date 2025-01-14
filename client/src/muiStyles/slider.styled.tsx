import { Box, styled } from "@mui/material";

export const SliderContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  height: "40vh",
}));

export const SlideImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "opacity 0.3s linear 2s,"
}));

export const SlideOverlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  height: "15vh",
  background: "rgba(255, 255, 255, 0.295)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transform: "translate(-50%, -50%)",
  color: "white",

  [theme.breakpoints.down("md")]: {
    width: "65%",
  },

  [theme.breakpoints.up("lg")]: {
    width: "50%",
  },
}));