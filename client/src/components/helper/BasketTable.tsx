import {
  Box,
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
import TablePagination from "@mui/material/TablePagination";
import { useState } from "react";
import { currencyFormat } from "../../util/util";

interface Status {
  loading: boolean;
  name: string;
}

interface Props {
  items: BasketItem[];
  addItem: (productId: number, name: string) => void;
  removeItem: (productId: number, quantity: number, name: string) => void;
  status: Status;
}

const BasketTable = ({ items, addItem, removeItem, status }: Props) => {
  
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, items.length - page * rowsPerPage);

  return (
    <>
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
            {(rowsPerPage > 0
              ? items.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : items
            ).map((item) => (
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
                  {currencyFormat(item.price)}
                </TableCell>

                <TableCell align="center">
                  <LoadingButton
                    color="primary"
                    onClick={() =>
                      removeItem(item.productId, 1, "rem" + item.productId)
                    }
                    loading={
                      status.loading && status.name === "rem" + item.productId
                    }
                  >
                    <Remove />
                  </LoadingButton>
                  <span>{item.quantity}</span>
                  <LoadingButton
                    color="primary"
                    onClick={() =>
                      addItem(item.productId, "add" + item.productId)
                    }
                    loading={
                      status.loading && status.name === "add" + item.productId
                    }
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
                    onClick={() =>
                      removeItem(
                        item.productId,
                        item.quantity,
                        "del" + item.productId
                      )
                    }
                    loading={
                      status.loading && status.name === "del" + item.productId
                    }
                  >
                    <Delete />
                  </LoadingButton>
                </TableCell>
              </TableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={tableHeaders.length} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Box width="100%" display="flex" justifyContent="right">
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={items.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelDisplayedRows={() => ``}
        />
      </Box>
    </>
  );
};

export default BasketTable;
