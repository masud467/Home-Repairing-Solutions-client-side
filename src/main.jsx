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
import Error from './Pages/ErrorPage/Error';
import Register from './Pages/RegisterPage/Register';
import LogIn from './Pages/LoginPage/LogIn';
import AuthProvider from './Providers/AuthProvider';
import AddService from './Pages/AddServices/AddService';
import PrivateRoute from './Routes/PrivateRoute';
import ViewDetails from './Pages/ViewDetailsPage/ViewDetails';
import Purchase from './Pages/PurchasePage/Purchase';
import ManageService from './Pages/ManageServicePage/ManageService';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/login',
        element:<LogIn></LogIn>
      },
      {
        path:'/allServices',
        element:<AllServices></AllServices>
      },
      {
        path:'/addServices',
        element:<PrivateRoute><AddService></AddService></PrivateRoute>
      },
      {
        path:'/viewDetails/:id',
        element:<PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:6003/viewDetails/${params.id}`)
      },
      {
        path:'/purchase/:id',
        element:<Purchase></Purchase>,
        loader:({params})=>fetch(`http://localhost:6003/purchase/${params.id}`)
      },
      {
        path:'/manageService',
        element:<PrivateRoute><ManageService></ManageService></PrivateRoute>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>
  </React.StrictMode>,
)
