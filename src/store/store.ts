import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slices/cartSlice";
import productsReducer from "../slices/productsSlice";
import rateReducer from "../slices/rateSlice";
import userReducer from "../slices/userSlice";
import { authApi } from "../services/auth";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    rate: rateReducer,
    user: userReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
