import { Box, Typography, Pagination } from "@mui/material";
import { MetaData } from "../../models/pagination";

interface Props {
  metaData: MetaData;
  onPageChange: (page: number) => void;
}

const PaginationComponent = ({ metaData, onPageChange }: Props) => {
  const { currentPage, totalCount, totalPages, pageSize } = metaData;

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Typography>
        Displaying {(currentPage - 1) * pageSize + 1} -{" "}
        {currentPage * pageSize > totalCount
          ? totalCount
          : currentPage * pageSize}{" "}
        of {totalCount} items
      </Typography>
      <Pagination
        sx={{
          "& .Mui-selected": {
            backgroundColor: "rgba(20, 146, 181, 0.478) !important",
          },
        }}
        size="large"
        count={totalPages}
        page={currentPage}
        onChange={(e, page) => onPageChange(page)}
      />
    </Box>
  );
};

export default PaginationComponent;
