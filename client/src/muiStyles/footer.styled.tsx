import { Box, styled } from "@mui/material";

export const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#f5f5f5",
  py: 2,
  px: 1,
  paddingTop: 15,
  mt: 0,
  height: "var(--footer-height)",
  bottom: 0,

  "& a": {
    display: "flex",
    alignItems: "center",
    mx: 1,
    textDecoration: "none",
    color: "inherit",
    textTransform: "capitalize",
    fontFamily: "Montserrat",
    fontSize: "18px",
  },

  "& svg": {
    marginRight: 1,
    color: "#326577c9",
  },
}));
