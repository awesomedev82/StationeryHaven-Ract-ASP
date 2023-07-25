import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Basket } from "../models/basket";
import agent from "../api/agent";

interface LoadingProductsState {
  [productIdActionType: string]: boolean;
}

interface BasketState {
  basket: Basket | null;
  loadingProducts: LoadingProductsState;
}

const initialState: BasketState = {
  basket: null,
  loadingProducts: {},
};

export const addBasketItemAsync = createAsyncThunk<
  Basket,
  { productId: number; quantity?: number }
>(
  "basket/addBasketItemAsync",
  async ({ productId, quantity = 1 }, thunkAPI) => {
    try {
      return await agent.Basket.addItem(productId, quantity);
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.data });
    }
  }
);

export const removeBasketItemAsync = createAsyncThunk<
  void,
  { productId: number; quantity: number; name?: string }
>("basket/removeBasketItemAsync", async ({ productId, quantity }, thunkAPI) => {
  try {
    return await agent.Basket.removeItem(productId, quantity);
  } catch (error: any) {
    return thunkAPI.rejectWithValue({ error: error.data });
  }
});

const getProductIdFromAction = (action: any) => {
  return action.meta.arg.productId;
};

const setLoading = (
  state: BasketState,
  productId: number,
  actionType: "add" | "remove",
  loading: boolean
) => {
  state.loadingProducts[`${productId}-${actionType}`] = loading;
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    setBasket: (state, action) => {
      state.basket = action.payload;
    },
    setLoadingProduct: (state, action) => {
      const { productId } = action.payload;
      setLoading(state, productId, "add", true);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addBasketItemAsync.pending, (state, action) => {
      const productId = getProductIdFromAction(action);
      setLoading(state, productId, "add", true);
    });
    builder.addCase(addBasketItemAsync.fulfilled, (state, action) => {
      const productId = getProductIdFromAction(action);
      state.basket = action.payload;
      setLoading(state, productId, "add", false);
    });
    builder.addCase(addBasketItemAsync.rejected, (state, action) => {
      const productId = getProductIdFromAction(action);
      setLoading(state, productId, "add", false);
    });
    builder.addCase(removeBasketItemAsync.pending, (state, action) => {
      const productId = getProductIdFromAction(action);
      setLoading(state, productId, "remove", true);
    });
    builder.addCase(removeBasketItemAsync.fulfilled, (state, action) => {
      const { productId, quantity } = action.meta.arg;
      const itemIndex = state.basket?.items.findIndex(
        (i) => i.productId === productId
      );
      if (itemIndex === -1 || itemIndex === undefined) return;
      state.basket!.items[itemIndex].quantity -= quantity;
      if (state.basket?.items[itemIndex].quantity === 0)
        state.basket.items.splice(itemIndex, 1);
      setLoading(state, productId, "remove", false);
    });
    builder.addCase(removeBasketItemAsync.rejected, (state, action) => {
      const productId = getProductIdFromAction(action);
      setLoading(state, productId, "remove", false);
    });
  },
});

export const { setBasket, setLoadingProduct } = basketSlice.actions;
