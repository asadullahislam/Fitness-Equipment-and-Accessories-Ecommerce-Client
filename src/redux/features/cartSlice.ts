import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  selectedItems: 0,
  totalPrice: 0,
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isExist = state.products.find(
        (product) => product._id === action.payload._id
      );
      if (!isExist) {
        state.products.push({ ...action.payload, quantity: 1 });
      }
      state.selectedItems = selectSelectedItems(state);
      state.totalPrice = selectTotalPrice(state);
    },
    updateQuantity: (state: any, action) => {
      const products = state.products.map((product: any) => {
        if (product._id === action.payload._id) {
          if (action.payload.type === "increment") {
            product.quantity += 1;
          } else if (action.payload.type === "decrement") {
            product.quantity -= 1;
          }
        }
        return product;
      });

      state.selectedItems = selectSelectedItems(state);
      state.totalPrice = selectTotalPrice(state);
    },
    deleteFormCart: (state, action) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload
      );
      state.selectedItems = selectSelectedItems(state);
      state.totalPrice = selectTotalPrice(state);
    },
    clearCart: (state) => {
      state.products = [];
      state.selectedItems = 0;
      state.totalPrice = 0;
    },
  },
});

export const selectSelectedItems = (state: any) =>
  state.products.reduce((total: number, product: any) => {
    return Number(total + product.quantity);
  }, 0);
export const selectTotalPrice = (state: any) =>
  state.products.reduce((total: number, product: any) => {
    return Number(total + product.quantity * product.price);
  }, 0);

export const { addToCart, updateQuantity, clearCart, deleteFormCart } =
  cartSlice.actions;

export default cartSlice.reducer;
