import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
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
    </TableContainer>
  );
};

export default ProductTable;
