import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import agent from "../api/agent";
import { Order } from "../models/order";

interface FetchOrdersArgs {
  buyerId: string;
}

export const fetchOrders = createAsyncThunk(
  "orders/fetchOrders",
  async ({ buyerId }: FetchOrdersArgs) => {
    try {
      const response = await agent.Orders.list();
      const userOrders = response.filter(
        (order: any) => order.buyerId === buyerId
      );
      return userOrders;
    } catch (error) {
      throw error;
    }
  }
);

const initialState = {
  orders: [] as Order[],
  loading: false,
  loaded: false,
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addNewOrder: (state, action: PayloadAction<Order>) => {
      state.orders.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.loading = true;
        state.loaded = false;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.orders = action.payload;
        state.loading = false;
        state.loaded = true;
      })
      .addCase(fetchOrders.rejected, (state) => {
        state.loading = false;
        state.loaded = false;
      });
  },
});

export const selectOrders = (state: any) => state.order.orders;
export const { addNewOrder } = orderSlice.actions;
export default orderSlice.reducer;
