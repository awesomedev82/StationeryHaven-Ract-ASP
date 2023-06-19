import { Card, styled } from "@mui/material";

interface LabelStyleProps {
  quantityInStock?: number;
}

export const CardStyle = styled(Card)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  boxShadow: `rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 4px 8px -4px`,
  "&:hover": {
    boxShadow: `rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px -4px`,
  },
}));

export const LabelStyle = styled("label")<LabelStyleProps>(({ theme, quantityInStock }) => ({
  fontWeight: 600,
  color: "white",
  backgroundColor:
    quantityInStock && quantityInStock > 0 ? theme.palette.success.main : theme.palette.error.main,
  padding: "4px 6px",
  borderRadius: theme.spacing(1),
  zIndex: 9,
  position: "absolute",
  top: theme.spacing(2),
  right: theme.spacing(2),
  textTransform: "uppercase",
}));