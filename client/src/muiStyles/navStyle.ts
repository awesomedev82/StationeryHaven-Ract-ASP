const baseNavStyles = {
  color: "inherit",
  textDecoration: "none",
  typography: "p",
  fontSize: "20px",
  textTransform: "capitalize",
  "&:hover": {
    color: "#444444",
  },
};

export const navStyles = {
  ...baseNavStyles,
  "&.active": {
    color: "text.secondary",
  },
};

export const navStylesForLogo = {
  ...baseNavStyles,
};

