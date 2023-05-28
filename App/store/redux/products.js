import { createSlice } from "@reduxjs/toolkit";

const products = createSlice({
  name: "products",
  initialState: {
    productsList: [],
    userProductsList: [],
  },
  reducers: {
    fetchProducts: (state, action) => {
      state.productsList = action.payload.productsData;
    },
    fetchProductsByUser: (state, action) => {
      state.userProductsList = state.payload.productsData;
    },
  },
});

export const { fetchProducts, fetchProductsByUser } = user.actions;
export default products.reducer;
