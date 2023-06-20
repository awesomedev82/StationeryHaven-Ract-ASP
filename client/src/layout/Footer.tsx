import { Box, Link, Typography } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import { links } from "../lib/constants";
import { useEffect } from "react";
import { StyledBox, footerLinksStyles } from "../muiStyles/footer.styled";

const Footer = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <StyledBox style={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)" }}>
      <Typography variant="body2" align="center" color="textSecondary">
        © {new Date().getFullYear()} Stationary Heaven. All rights reserved.
      </Typography>
      <Box display="flex" justifyContent="center" mt={1}>
        {links.map(({ title, path, icon: Icon }) => (
          <Link
            key={path}
            component={NavLink}
            to={path}
            variant="body2"
            sx={footerLinksStyles}
          >
            {<Icon sx={{ marginRight: 0.5, color: "#326577c9" }} />}
            {title}
          </Link>
        ))}
      </Box>
    </StyledBox>
  );
};

export default Footer;
