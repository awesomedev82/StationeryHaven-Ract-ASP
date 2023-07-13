import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { Product, ProductParams } from "../models/product";
import { MetaData } from "../models/pagination";
import agent from "../api/agent";
import { RootState } from "./store/configureStore";

interface ProductState {
  productsLoaded: boolean;
  filtersLoaded: boolean;
  status: string;
  brands: string[];
  types: string[];
  productParams: ProductParams;
  metaData: MetaData | null;
}

const productsAdapter = createEntityAdapter<Product>();

// Create an entity adapter for managing products
function getAxiosParams(productParams: ProductParams) {
  const params = new URLSearchParams();
  params.append("pageNumber", productParams.pageNumber.toString());
  params.append("pageSize", productParams.pageSize.toString());
  params.append("orderBy", productParams.orderBy);
  if (productParams.searchTerm)
    params.append("searchTerm", productParams.searchTerm);
  if (productParams.brands.length > 0)
    params.append("brands", productParams.brands.toString());
  if (productParams.types.length > 0)
    params.append("types", productParams.types.toString());
  return params;
}

// Define async thunks for fetching products, a single product, and filters
export const fetchProductsAsync = createAsyncThunk<
  Product[],
  void,
  { state: RootState }
>("product/fetchProductsAsync", async (_, thunkAPI) => {
  try {
    const params = getAxiosParams(thunkAPI.getState().product.productParams);
    const response = await agent.Product.list(params);
    thunkAPI.dispatch(setMetaData(response.metaData));
    return response.items;
  } catch (error: any) {
    return thunkAPI.rejectWithValue({ error: error.data });
  }
});

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

// Helper function to initialize product params
function initParams() {
  return {
    pageNumber: 1,
    pageSize: 9,
    orderBy: "name",
    brands: [],
    types: [],
  };
}

export const productSlice = createSlice({
  name: "product",
  initialState: productsAdapter.getInitialState<ProductState>({
    productsLoaded: false,
    filtersLoaded: false,
    status: "idle",
    brands: [],
    types: [],
    productParams: initParams(),
    metaData: null,
  }),
  reducers: {
    setProductParams: (state, action) => {
      state.productsLoaded = false;
      state.productParams = {
        ...state.productParams,
        ...action.payload,
        pageNumber: 1,
      };
    },
    resetProductParams: (state) => {
      state.productParams = initParams();
    },
    setMetaData: (state, action) => {
      state.metaData = action.payload;
    },
    setPageNumber: (state, action) => {
      state.productsLoaded = false;
      state.productParams = { ...state.productParams, ...action.payload };
    },
  },
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
      state.status = "filterFetchProduct";
    });
    buider.addCase(fetchProductAsync.fulfilled, (state, action) => {
      productsAdapter.upsertOne(state, action.payload);
      state.status = "idle";
    });
    buider.addCase(fetchProductAsync.rejected, (state) => {
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
    buider.addCase(fetchFilters.rejected, (state) => {
      state.status = "idle";
      state.filtersLoaded = false;
    });
  },
});

export const productsSelectors = productsAdapter.getSelectors(
  (state: RootState) => state.product
);

export const {
  setProductParams,
  resetProductParams,
  setMetaData,
  setPageNumber,
} = productSlice.actions;
