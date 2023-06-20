import {
  Box,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Add, Delete, Remove } from "@mui/icons-material";
import { BasketItem } from "../../models/basket";
import { tableHeaders } from "../../lib/constants";
import { LoadingButton } from "@mui/lab";

interface Props {
  items: BasketItem[];
  addItem: (productId: number) => void;
  removeItem: any;
  loading: boolean;
}

const BasketTable = ({
  items,
  addItem,
  removeItem,
  loading,
}: Props) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            {tableHeaders.map((header, index) => (
              <TableCell key={index} align={header.align}>
                {header.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => (
            <TableRow
              key={item.productId}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Box display="flex" alignItems="center">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    style={{ height: 50, marginRight: 20 }}
                  />
                  <span>{item.name}</span>
                </Box>
              </TableCell>

              <TableCell align="right">
                ${(item.price / 100).toFixed(2)}
              </TableCell>

              <TableCell align="center">
                <LoadingButton
                  color="primary"
                  onClick={() => removeItem(item.productId)}
                  loading={loading}
                >
                  <Remove />
                </LoadingButton>
                <span>{item.quantity}</span>
                <LoadingButton
                  color="primary"
                  onClick={() => addItem(item.productId)}
                  loading={loading}
                >
                  <Add />
                </LoadingButton>
              </TableCell>
              <TableCell align="right">
                ${((item.price / 100) * item.quantity).toFixed(2)}
              </TableCell>

              <TableCell align="right">
                <LoadingButton
                  color="error"
                  onClick={() => removeItem(item.productId, item.quantity)}
                  loading={loading}
                >
                  <Delete />
                </LoadingButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BasketTable;
