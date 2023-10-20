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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
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
        element:<AddProduct></AddProduct>
      },
      {
        path:'/myCart',
        element:<MyCart></MyCart>,
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
