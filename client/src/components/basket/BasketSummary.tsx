import {
  TableContainer,
  Paper,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  ListItemIcon,
} from "@mui/material";
import img from "../../images/label.png";
import { currencyFormat } from "../../util/util";

interface Props {
  subtotal: number;
  deliveryFee: number;
}

const BasketSummary = ({ subtotal, deliveryFee }: Props) => {
  return (
    <>
      <Typography gutterBottom variant="h3">
        Price
        <ListItemIcon>
          <img
            src={img}
            alt="Shopping Bag"
            style={{ marginLeft: 10, height: "7vh", paddingTop: "13%" }}
          />
        </ListItemIcon>
      </Typography>
      <TableContainer
        component={Paper}
        variant={"outlined"}
        style={{ maxWidth: "30rem", marginBottom: "1%" }}
      >
        <Table>
          <TableBody>
            <TableRow>
              <TableCell colSpan={2} style={{ fontSize: "25px" }}>
                Subtotal
              </TableCell>
              <TableCell align="right">{currencyFormat(subtotal)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>Delivery fee*</TableCell>
              <TableCell align="right">{currencyFormat(deliveryFee)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell align="right">
                {currencyFormat(subtotal + deliveryFee)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <span style={{ fontStyle: "italic" }}>
                  *Orders over $100 qualify for free delivery
                </span>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default BasketSummary;
