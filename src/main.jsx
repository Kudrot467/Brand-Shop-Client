import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import AddProduct from './Components/Add Product/AddProduct.jsx';
import BrandDetails from './Components/BrandDetails/BrandDetails.jsx';
import Update from './Components/Update/Update.jsx';
import AuthProvider from './Components/Providers/AuthProvider.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import ProductDetails from './ProductDetails/ProductDetails.jsx';
import MyCart from './Components/MyCart/MyCart.jsx';
import PrivateRoute from './Components/PrivateRoutes/PrivateRoutes.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('http://localhost:5000/brands')
      },
      {
        
          path:'/login',
          element:<Login></Login>,
      },
      {
        path:'/register',
        element:<Register></Register>,
    },
      {
        path:'/addProduct',
        element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path:'/myCart',
        element:<PrivateRoute><MyCart></MyCart></PrivateRoute>,
        loader:()=>fetch('http://localhost:5000/cart')
      },
      {
        path:'/productDetails/:id',
        element:<ProductDetails></ProductDetails>,
        loader:()=>fetch('http://localhost:5000/products')
      },
      {
        path:'/brandDetails/:brand_name',
        element:<BrandDetails></BrandDetails>,
        loader:()=>fetch('http://localhost:5000/products')
      },
      {
        path:'/update/:id',
        element:<Update></Update>,
        loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`)
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router}/>
   </AuthProvider>
  </React.StrictMode>,
)
