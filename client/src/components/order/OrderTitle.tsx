import { Paper, Typography, Divider } from "@mui/material";
import { formatData, currencyFormat } from "../../util/util";
import BasketTable from "../basketTable/BasketTable";

const OrderTile = ({ order } : any) => (
  <Paper elevation={3} sx={{ padding: "20px", marginBottom: "20px" }}>
    <Typography variant="h5" gutterBottom>
      Order №{order.id}
    </Typography>
    <Typography variant="body2" gutterBottom>
      <span style={{ fontWeight: "bold" }}>Order Date:</span>{" "}
      {formatData(order.orderDate)}
    </Typography>
    <Typography variant="body2" gutterBottom>
      <span style={{ fontWeight: "bold" }}>Delivery Fee:</span>{" "}
      {currencyFormat(order.deliveryFee)}
    </Typography>
    <Typography variant="h6" gutterBottom>
      <span style={{ fontWeight: "bold" }}>Total Sum:</span>{" "}
      {currencyFormat(order.total)}
    </Typography>
    <Divider sx={{ marginY: "10px" }} />
    <BasketTable items={order.orderItems} isBasket isOrder />
  </Paper>
);

export default OrderTile;
