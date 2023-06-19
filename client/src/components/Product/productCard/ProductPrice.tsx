import { Typography, styled } from "@mui/material";

const TextStyle = styled(Typography)(({ theme }) => ({
  fontSize: 18,
  "& .disabledText": {
    fontSize: 16,
    color: theme.palette.text.secondary,
    marginRight: theme.spacing(0.5),
    textDecoration: "line-through",
  },
}));

interface Props {
  price: number;
}

const ProductPrice = ({ price }: Props) => {
  const formattedPrice = (price / 100).toFixed(2);

  return (
    <TextStyle variant="subtitle2">
      <span>${formattedPrice}</span>
    </TextStyle>
  );
};

export default ProductPrice;
