import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import { productApi } from "./api/api";
import { checkoutApi } from "./api/checkoutApi";

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    [checkoutApi.reducerPath]: checkoutApi.reducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productApi.middleware)
      .concat(checkoutApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
