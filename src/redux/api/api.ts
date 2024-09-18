import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export type TProduct = {
//   _id?: string;
//   name: string;
//   price: number;
//   category: string[];
//   description: string;
//   quantity: number;
//   image: string;
//   isDeleted?: boolean;
//   createdAt?: string;
//   updatedAt?: string;
// };

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    //GET all products
    getProducts: builder.query({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
    }),
    addProduct: builder.mutation({
      query: (data) => ({
        url: "/products",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetProductsQuery, useAddProductMutation } = productApi;
