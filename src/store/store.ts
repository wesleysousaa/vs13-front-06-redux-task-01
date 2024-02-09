import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slices/cartSlice";
import productsReducer from "../slices/productsSlice";
import rateReducer from "../slices/rateSlice";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    rate: rateReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
