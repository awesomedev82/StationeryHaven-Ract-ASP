import React, { useEffect, useState } from "react";
import agent from "../api/agent";
import { getCookie } from "../util/util";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]); 
  const buyerIdFromCookie = getCookie("buyerId");

  useEffect(() => {
    if (buyerIdFromCookie) {
      agent.Orders.list() 
        .then((allOrders) => {
          const userOrders = allOrders.filter(
            (order: any) => order.buyerId === buyerIdFromCookie
          );
          setOrders(userOrders);
        })
        .catch((error) => console.log(error));
    }
  }, [buyerIdFromCookie]);

  console.log(orders);

  return (
    <div>
      <h1>Your Orders</h1>
      {orders.map((order: any) => (
        <div key={order.id}>
          <p>Order ID: {order.id}</p>
          <p>Order Date: {order.orderDate}</p>
        </div>
      ))}
    </div>
  );
};

export default OrdersPage;
