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
import Update from './Pages/UpdatePage/Update';
import BookedService from './Pages/BookedService/BookedService';
import { HelmetProvider } from 'react-helmet-async';
import ServiceToDo from './Pages/ServiceToDo Page/ServiceToDo';

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
        loader:({params})=>fetch(`https://home-repairing-solutions-for-server.vercel.app/viewDetails/${params.id}`)
      },
      {
        path:'/purchase/:id',
        element:<PrivateRoute><Purchase></Purchase></PrivateRoute>,
        loader:({params})=>fetch(`https://home-repairing-solutions-for-server.vercel.app/purchase/${params.id}`)
      },
      {
        path:'/manageService',
        element:<PrivateRoute><ManageService></ManageService></PrivateRoute>
      },
      {
        path:'/update/:id',
        element:<PrivateRoute><Update></Update></PrivateRoute>,
        loader:({params})=>fetch(`https://home-repairing-solutions-for-server.vercel.app/update/${params.id}`)
      },
      {
        path:'/bookedService',
        element:<PrivateRoute><BookedService></BookedService></PrivateRoute>,
        // loader:({params})=>fetch(`https://home-repairing-solutions-for-server.vercel.app/bookedService/${params.email}`)
      },
      {
        path:'/serviceToDo',
        element:<PrivateRoute><ServiceToDo></ServiceToDo></PrivateRoute>,
        
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
