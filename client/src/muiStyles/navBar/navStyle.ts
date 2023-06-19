const baseNavStyles = {
  color: "inherit",
  textDecoration: "none",
  typography: "p",
  fontSize: "22px",
  textTransform: "capitalize",
  "&:hover": {
    color: "#444444",
  },
};

export const navStyles = {
  ...baseNavStyles,
  "&.active": {
    color: "#7b72a1",
    textDecoration: "underline"
  },
};

export const navStylesForLogo = {
  ...baseNavStyles,
};

