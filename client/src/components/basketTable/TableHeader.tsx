import { TableCell, TableRow } from "@mui/material";
import { basketTableHeaders } from "../../lib/constants";

const TableHeader = ({
  isBasket,
  isOrder,
}: {
  isBasket: boolean;
  isOrder?: boolean;
}) => {
  return (
    <TableRow>
      {basketTableHeaders.map((header, index) => (
        <TableCell key={index} align={header.align}>
          {header.label}
        </TableCell>
      ))}
      {isBasket && !isOrder && <TableCell align="center"></TableCell>}
    </TableRow>
  );
};

export default TableHeader;
