import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { Product } from "../models/product";
import agent from "../api/agent";
import { RootState } from "./store/configureStore";

const productsAdapter = createEntityAdapter<Product>();

export const fetchProductsAsync = createAsyncThunk<Product[]>(
  "product/fetchProductsAsync",
  async () => {
    try {
      return await agent.Product.list();
    } catch (error) {
      console.log(error);
    }
  }
);

export const fetchProductAsync = createAsyncThunk<Product, number>(
  "product/fetchProductAsync",
  async (productId) => {
    try {
      return await agent.Product.details(productId);
    } catch (error) {
      console.log(error);
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState: productsAdapter.getInitialState({
    productsLoaded: false,
    status: "idle",
  }),
  reducers: {},
  extraReducers: (buider) => {
    buider.addCase(fetchProductsAsync.pending, (state) => {
      state.status = "pendingFetchProducts";
    });
    buider.addCase(fetchProductsAsync.fulfilled, (state, action) => {
      productsAdapter.setAll(state, action.payload);
      state.status = "idle";
      state.productsLoaded = true;
    });
    buider.addCase(fetchProductsAsync.rejected, (state) => {
      state.status = "idle";
    });
    buider.addCase(fetchProductAsync.pending, (state) => {
      state.status = "pendingFetchProduct";
    });
    buider.addCase(fetchProductAsync.fulfilled, (state, action) => {
      productsAdapter.upsertOne(state, action.payload);
      state.status = "idle";
    });
    buider.addCase(fetchProductAsync.rejected, (state) => {
      state.status = "idle";
    });
  },
});

export const productsSelectors = productsAdapter.getSelectors(
  (state: RootState) => state.product
);
