import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import { Product } from "../models/product";
import { tableCell } from "../muiStyles/productDetails";

interface Props {
  product: Product;
}

const ProductTable = ({ product }: Props) => {
  return (
    <TableContainer>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell sx={tableCell}>Name</TableCell>
            <TableCell sx={tableCell}>{product.name}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell sx={tableCell}>Type</TableCell>
            <TableCell sx={tableCell}>{product.type}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell sx={tableCell}>Brand</TableCell>
            <TableCell sx={tableCell}>{product.brand}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell sx={tableCell}>Quantity in stock</TableCell>
            <TableCell sx={tableCell}>{product.quantityInStock}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductTable;
