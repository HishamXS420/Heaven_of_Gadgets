import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ToastContainer } from "react-toastify";

import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./Components/Root/Root";
import Banner from "./Components/Banner/Banner";
import Dashboard from "./Components/Dashboard/Dashboard";
import Gadgets from "./Components/Gadgets/Gadgets";
import GadgetDetails from "./Components/GadgetDetails/GadgetDetails";
import Statistics from "./Components/Statistics/Statistics";
import Home from "./Components/Home/Home";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import { CartProvider } from './Components/CartContext/CartContext';
import Login from "./Components/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/gadgets",
        element: <Gadgets></Gadgets>,
        loader: () => fetch("/gadgets.json"),
      },
      {
        path: "/gadgets/:id",
        element: <GadgetDetails></GadgetDetails>,
        loader: () => fetch("/gadgets.json"),
      },
      {
        path: "/stats",
        element: <Statistics></Statistics>,
      },
      {
        path: "/account",
        element: <Login></Login>,
      },
    ],
  },
]);

// The useEffect hook is used to perform side effects in function components. In this case, you need to use useEffect to update the document title whenever the route changes. Without useEffect, the title would not update correctly because the component would not re-render when the route changes.



createRoot(document.getElementById("root")).render(
  <StrictMode>

    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
    <ToastContainer />
  </StrictMode>
);
