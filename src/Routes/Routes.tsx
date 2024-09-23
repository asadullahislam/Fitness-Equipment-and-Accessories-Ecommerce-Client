import { createBrowserRouter } from "react-router-dom";

import Home from "../Page/Home/Home/Home";
import Products from "../components/Products/Products/Products";
import AboutUs from "../components/AboutUs/AboutUs";
import Cart from "../components/Cart/Cart/Cart";
import CheckOut from "../components/CheckOut/CheckOut/CheckOut";
import Main from "../Layout/Main";
import Admin from "../Layout/Admin/Admin";
import AddProduct from "../Layout/ProductOperation/AddProdcut/AddProduct";
import UpdateProduct from "../Layout/ProductOperation/UpdateProduct/UpdateProduct";
import CheckoutSummary from "../components/CheckOut/CheckOut/CheckoutSummary";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "products",
        element: <Products></Products>,
      },
      {
        path: "aboutus",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "cart",
        element: <Cart></Cart>,
      },

      {
        path: "addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/updateProduct/:id",
        element: <UpdateProduct></UpdateProduct>,
      },
      {
        path: "checkout",
        element: <CheckOut></CheckOut>,
      },
      {
        path: "checkout-summary",
        element: <CheckoutSummary></CheckoutSummary>,
      },

      {
        path: "admin",
        element: <Admin></Admin>,
      },
    ],
  },
]);
