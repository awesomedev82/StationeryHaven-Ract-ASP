import { Link, Typography } from "@mui/material";
import { Link as RouteLink } from "react-router-dom";

interface Props {
  name: string;
  productLink: string;
}

const ProductTitle = ({ name, productLink }: Props) => (
  <Link
    component={RouteLink}
    to={productLink}
    underline="hover"
    color="inherit"
  >
    <Typography variant="subtitle1" noWrap>
      {name}
    </Typography>
  </Link>
);

export default ProductTitle;
