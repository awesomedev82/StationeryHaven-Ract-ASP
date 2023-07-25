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
import { useState } from "react";
import { currencyFormat } from "../../util/util";
import {
  addBasketItemAsync,
  removeBasketItemAsync,
} from "../../redux/basketSlice";
import {
  useAppDispatch,
  useAppSelector,
} from "../../redux/store/configureStore";
import BasketTableHeader from "./TableHeader";
import BasketPaginationComponent from "./BasketPaginationComponent";

interface Props {
  items: BasketItem[];
  isBasket?: boolean;
}

const BasketTable = ({ items, isBasket = true }: Props) => {
  const { loadingProducts } = useAppSelector((state: any) => state.basket);

  const dispatch = useAppDispatch();

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

  const handleButtonClick = (
    productId: number,
    action: "add" | "remove" | "delete"
  ) => {
    switch (action) {
      case "add":
        dispatch(addBasketItemAsync({ productId }));
        break;
      case "remove":
        dispatch(
          removeBasketItemAsync({ productId, quantity: 1, name: "rem" })
        );
        break;
      case "delete":
        const itemToDelete = items.find((item) => item.productId === productId);
        if (itemToDelete) {
          dispatch(
            removeBasketItemAsync({
              productId,
              quantity: itemToDelete.quantity,
              name: "del",
            })
          );
        }
        break;
      default:
        break;
    }
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <BasketTableHeader isBasket={isBasket} />
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
                  {isBasket && (
                    <LoadingButton
                      color="primary"
                      onClick={() =>
                        handleButtonClick(item.productId, "remove")
                      }
                      loading={loadingProducts[`${item.productId}-remove`]}
                    >
                      <Remove />
                    </LoadingButton>
                  )}
                  <span>{item.quantity}</span>
                  {isBasket && (
                    <LoadingButton
                      color="primary"
                      onClick={() => handleButtonClick(item.productId, "add")}
                      loading={loadingProducts[`${item.productId}-add`]}
                    >
                      <Add />
                    </LoadingButton>
                  )}
                </TableCell>
                <TableCell align="right">
                  ${((item.price / 100) * item.quantity).toFixed(2)}
                </TableCell>

                {isBasket && (
                  <TableCell align="right">
                    <LoadingButton
                      color="error"
                      onClick={() =>
                        handleButtonClick(item.productId, "delete")
                      }
                      loading={loadingProducts[`${item.productId}-remove`]}
                    >
                      <Delete />
                    </LoadingButton>
                  </TableCell>
                )}
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

      <BasketPaginationComponent
        totalCount={items.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};

export default BasketTable;
