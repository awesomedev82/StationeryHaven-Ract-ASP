import { useEffect } from "react";
import { Container, Typography, ListItemIcon } from "@mui/material";
import { getCookie } from "../util/util";
import deliveryIcon from "../images/order-tracking.png";
import EmptyOrders from "../components/helper/EmptyOrders";
import Loading from "../components/helper/Loading";
import { useAppDispatch, useAppSelector } from "../redux/store/configureStore";
import { fetchOrders } from "../redux/orderSlice";
import OrderTile from "../components/order/OrderTitle";
import { Order } from "../models/order";

const OrdersPage = () => {
  const dispatch = useAppDispatch();
  const { orders, loading, loaded } = useAppSelector((state) => state.order);
  const buyerIdFromCookie = getCookie("buyerId");

  useEffect(() => {
    if (buyerIdFromCookie && !loaded) {
      dispatch(fetchOrders({ buyerId: buyerIdFromCookie }));
    }
  }, [dispatch, buyerIdFromCookie, loaded]);

  if (loading) {
    return <Loading message="Loading orders..." />;
  }

  if (!orders.length) {
    return <EmptyOrders />;
  }

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
      {orders.map((order: Order) => (
        <OrderTile key={order.id} order={order} />
      ))}
    </Container>
  );
};

export default OrdersPage;
