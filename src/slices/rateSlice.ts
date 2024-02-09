import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../types/Product";
import { fakeData } from "../db/fakeDb";

export type rateType = {
  product: Product;
  rate: number;
};
interface RateState {
  rating: rateType[];
}

const initialState: RateState = {
  rating: fakeData.map((item) => ({ product: item, rate: 0 })),
};

export const rateSlice = createSlice({
  name: "rate",
  initialState,
  reducers: {
    rate: (state, action: PayloadAction<Product>) => {
      state.rating = state.rating.map((item) => {
        if (item.product.id === action.payload.id) {
          return { ...item, rate: item.rate + 1 };
        }
        return item;
      });
      state.rating.sort((a, b) => b.rate - a.rate);
    },
  },
});

export const { rate } = rateSlice.actions;
export default rateSlice.reducer;
