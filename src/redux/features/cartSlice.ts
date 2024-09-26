import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Product = {
  _id: string;
  name: string;
  price: number;
  quantity: number;
};

type CartState = {
  products: Product[];
  selectedItems: number;
  totalPrice: number;
};
const initialState: CartState = {
  products: [],
  selectedItems: 0,
  totalPrice: 0,
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.products.find(
        (product) => product._id === action.payload._id
      );

      if (existingProduct) {
        // If the product is already in the cart, increment its quantity
        existingProduct.quantity += 1;
      } else {
        // If the product is not in the cart, add it with a quantity of 1
        state.products.push({ ...action.payload, quantity: 1 });
      }

      // Update the selectedItems and totalPrice after adding to cart
      state.selectedItems = selectSelectedItems(state);
      state.totalPrice = selectTotalPrice(state);
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ _id: string; type: "increment" | "decrement" }>
    ) => {
      state.products = state.products.map((product) => {
        if (product._id === action.payload._id) {
          if (action.payload.type === "increment") {
            product.quantity += 1;
          } else if (
            action.payload.type === "decrement" &&
            product.quantity > 0
          ) {
            product.quantity -= 1;
          }
        }
        return product;
      });

      // Update selectedItems and totalPrice after modifying the product quantity
      state.selectedItems = selectSelectedItems(state);
      state.totalPrice = selectTotalPrice(state);
    },

    deleteFromCart: (state, action) => {
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

export const { addToCart, updateQuantity, clearCart, deleteFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
