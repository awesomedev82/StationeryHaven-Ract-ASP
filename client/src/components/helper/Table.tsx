import {
  Table,
  TableBody,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { Product } from "../../models/product";
import { StyledTableCell } from "../../muiStyles/helper/tableCell.styled";

interface Props {
  product: Product;
}

const ProductTable = ({ product }: Props) => {
  return (
    <TableContainer>
      <Table>
        <TableBody>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>{product.name}</StyledTableCell>
          </TableRow>

          <TableRow>
            <StyledTableCell>Type</StyledTableCell>
            <StyledTableCell>{product.type}</StyledTableCell>
          </TableRow>

          <TableRow>
            <StyledTableCell>Brand</StyledTableCell>
            <StyledTableCell>{product.brand}</StyledTableCell>
          </TableRow>

          <TableRow>
            <StyledTableCell>Quantity in stock</StyledTableCell>
            <StyledTableCell>{product.quantityInStock}</StyledTableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Typography
          variant="h4"
          color="green"
          sx={{
            mt: 2,
            fontFamily: "Arial",
            fontSize: "24px",
            pb: "2%",
            pl: "3%",
          }}
        >
          <span style={{ color: "#2f2e2edf", paddingRight: "1%" }}>
            Price:{" "}
          </span>
          ${(product.price / 100).toFixed(2)}
        </Typography>
    </TableContainer>
  );
};

export default ProductTable;
