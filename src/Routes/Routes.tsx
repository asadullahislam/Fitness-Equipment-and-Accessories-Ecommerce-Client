import { createBrowserRouter } from "react-router-dom";

import Home from "../Page/Home/Home/Home";
import Products from "../components/Products/Products/Products";
import AboutUs from "../components/AboutUs/AboutUs";
import Cart from "../components/Cart/Cart/Cart";
import CheckOut from "../components/CheckOut/CheckOut/CheckOut";
import Main from "../Layout/Main";

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
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/checkout",
        element: <CheckOut></CheckOut>,
      },
    ],
  },
]);
