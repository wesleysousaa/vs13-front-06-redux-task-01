import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../types/Product";
import { fakeData } from "../db/fakeDb";

interface ProductsState {
  products: Product[];
  filter: string;
}

const initialState: ProductsState = {
  products: fakeData,
  filter: "Todos",
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
      state.products = fakeData.filter(
        (product) =>
          product.categoria === action.payload || action.payload === "Todos"
      );
    },
  },
});

export const { filter } = productsSlice.actions;
export default productsSlice.reducer;
