import { Box } from "@mui/material";
import { LabelStyle } from "../../../muiStyles/product/product.styled";

interface Props {
  imageUrl: string;
  name: string;
  quantityInStock?: number;
}

const ProductImage = ({ imageUrl, name, quantityInStock }: Props) => (
  <Box sx={{ pt: "90%", position: "relative" }}>
    {quantityInStock && (
      <LabelStyle quantityInStock={quantityInStock}>
        {quantityInStock}
      </LabelStyle>
    )}
    {!quantityInStock && <LabelStyle>Out of stock</LabelStyle>}
    <Box
      sx={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
      }}
      component="img"
      src={imageUrl}
      alt={name}
    />
  </Box>
);

export default ProductImage;
