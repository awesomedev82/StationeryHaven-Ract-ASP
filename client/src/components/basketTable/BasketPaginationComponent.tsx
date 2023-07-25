import React from "react";
import { Box, TablePagination } from "@mui/material";

interface Props {
  totalCount: number;
  rowsPerPage: number;
  page: number;
  onPageChange: (event: unknown, newPage: number) => void;
  onRowsPerPageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const BasketPaginationComponent = ({
  totalCount,
  rowsPerPage,
  page,
  onPageChange,
  onRowsPerPageChange,
}: Props) => {
  return (
    <Box width="100%" display="flex" justifyContent="right">
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={totalCount}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
        labelDisplayedRows={() => ``}
      />
    </Box>
  );
};

export default BasketPaginationComponent;
