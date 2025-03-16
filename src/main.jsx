import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ToastContainer } from 'react-toastify';

import { createBrowserRouter, RouterProvider } from "react-router";
import Root from './Components/Root/Root';
import Banner from './Components/Banner/Banner';
import Dashboard from './Components/Dashboard/Dashboard';
import Gadgets from './Components/Gadgets/Gadgets';
import GadgetDetails from './Components/GadgetDetails/GadgetDetails';
import Statistics from './Components/Statistics/Statistics';
import Home from './Components/Home/Home';
import ErrorPage from './Components/ErrorPage/ErrorPage';



const router = createBrowserRouter([{
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
          {
            path: '/home',
            element: <Home></Home>,
          },
            {
              path: '/dashboard',
              element: <Dashboard></Dashboard>,
            },
            {
              path: '/gadgets',
              element: <Gadgets></Gadgets>,
            },
            {
              path: '/gadgets/:gadgetID',
              element: <GadgetDetails></GadgetDetails>,
            },
            {
              path: '/stats',
              element: <Statistics></Statistics>,
            },
            
        ]
}]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <ToastContainer />
  </StrictMode>,
)
