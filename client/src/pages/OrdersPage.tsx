import { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Paper,
  Divider,
  ListItemIcon,
} from "@mui/material";
import agent from "../api/agent";
import { currencyFormat, formatData, getCookie } from "../util/util";
import BasketTable from "../components/basketTable/BasketTable";
import deliveryIcon from "../images/order-tracking.png";
import EmptyOrders from "../components/helper/EmptyOrders";
import Loading from "../components/helper/Loading";

const OrdersPage = () => {
  const [orders, setOrders] = useState<any>([]);
  const [ordersLoaded, setOrdersLoaded] = useState(false);
  const buyerIdFromCookie = getCookie("buyerId");

  useEffect(() => {
    if (buyerIdFromCookie) {
      agent.Orders.list()
        .then((allOrders) => {
          const userOrders = allOrders.filter(
            (order: any) => order.buyerId === buyerIdFromCookie
          );
          setOrders(userOrders);
          setOrdersLoaded(true);
        })
        .catch((error) => console.log(error));
    }
  }, [buyerIdFromCookie]);

  if (!ordersLoaded) {
    return <Loading message="Loading orders..." />;
  }

  if (!orders.length) {
    return <EmptyOrders />;
  }

  console.log(orders);
  

  return (
    <Container maxWidth="lg" sx={{ paddingBottom: "5vh" }}>
      <Typography variant="h2" gutterBottom sx={{ textAlign: "center" }}>
        Your Orders
        <ListItemIcon>
          <img
            src={deliveryIcon}
            alt="Delivery Icon"
            style={{ marginLeft: 14, height: "8vh" }}
          />
        </ListItemIcon>
      </Typography>
      {orders.map((order: any) => (
        <Paper
          key={order.id}
          elevation={3}
          sx={{ padding: "20px", marginBottom: "20px" }}
        >
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
      ))}
    </Container>
  );
};

export default OrdersPage;
