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
  async (_, thunkAPI) => {
    try {
      return await agent.Product.list();
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.data });
    }
  }
);

export const fetchProductAsync = createAsyncThunk<Product, number>(
  "product/fetchProductAsync",
  async (productId, thunkAPI) => {
    try {
      return await agent.Product.details(productId);
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.data });
    }
  }
);

export const fetchFilters = createAsyncThunk(
  "product/fetchFilters",
  async (_, thunkAPI) => {
    try {
      return await agent.Product.fetchFilters();
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.data });
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState: productsAdapter.getInitialState({
    productsLoaded: false,
    filtersLoaded: false,
    status: "idle",
    brands: [],
    types: [],
  }),
  reducers: {},
  extraReducers: (buider) => {
    // fetch all products
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

    // fetch single product
    buider.addCase(fetchProductAsync.pending, (state) => {
      state.status = "pendingFetchProduct";
    });
    buider.addCase(fetchProductAsync.fulfilled, (state, action) => {
      productsAdapter.upsertOne(state, action.payload);
      state.status = "idle";
    });
    buider.addCase(fetchProductAsync.rejected, (state, action) => {
      state.status = "idle";
    });

    // fetch filters
    buider.addCase(fetchFilters.pending, (state) => {
      state.status = "pendingFetchFilters";
    });
    buider.addCase(fetchFilters.fulfilled, (state, action) => {
      state.brands = action.payload.brands;
      state.types = action.payload.types;
      state.status = "idle";
      state.filtersLoaded = true;
    });
    buider.addCase(fetchFilters.rejected, (state, action) => {
      state.status = "idle";
      state.filtersLoaded = false;   
    });
  },
});

export const productsSelectors = productsAdapter.getSelectors(
  (state: RootState) => state.product
);
