import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define an RTK Query API for checkout
export const checkoutApi = createApi({
  reducerPath: "checkoutApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (orderData) => ({
        url: "/checkout", // Backend checkout endpoint
        method: "POST",
        body: orderData,
      }),
    }),
  }),
});

export const { useCreateOrderMutation } = checkoutApi;
