import { LoadingButton } from "@mui/lab";
import { green } from "@mui/material/colors";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

interface Props {
  loading: boolean;
  handleAddItem: () => void;
}

const AddToBasketButton = ({ loading, handleAddItem }: Props) => (
  <LoadingButton
    loading={loading}
    onClick={handleAddItem}
    size="small"
    variant="contained"
    color="success"
    endIcon={<ShoppingCartIcon />}
  >
    Add to Basket
  </LoadingButton>
);

export default AddToBasketButton;
