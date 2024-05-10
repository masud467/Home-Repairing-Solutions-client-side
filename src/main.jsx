import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './Roots/Roots';
import Home from './Pages/Home/Home';
import AllServices from './Pages/AllServices/AllServices';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/allServices',
        element:<AllServices></AllServices>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
