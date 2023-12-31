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
import InformationSamsung from './Components/InformationSamsung/InformationSamsung.jsx';
import InformationApple from './Components/InformationApple/InformationApple.jsx';
import InformationLG from './Components/InformationLG/InformationLG.jsx';
import InformationGoogle from './Components/InformationGoogle/InformationGoogle.jsx';
import InformationMI from './Components/InformationMI/InformationMI.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('https://1001-brand-server.vercel.app/brands')
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
        loader:()=>fetch('https://1001-brand-server.vercel.app/cart')
      },
      {
        path:'/productDetails/:id',
        element:<PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
        loader:()=>fetch('https://1001-brand-server.vercel.app/products')
      },
      {
        path:'/brandDetails/:brand_name',
        element:<BrandDetails></BrandDetails>,
        loader:()=>fetch('https://1001-brand-server.vercel.app/products')
      },
      {
        path:'/update/:id',
        element:<Update></Update>,
        loader:({params})=>fetch(`https://1001-brand-server.vercel.app/products/${params.id}`)
      },
      {
        path:'/informationSamsung',
        element:<InformationSamsung></InformationSamsung>
      },
      {
        path:'/informationApple',
        element:<InformationApple></InformationApple>
      },
      {
        path:'/informationLG',
        element:<InformationLG></InformationLG>
      },
      {
        path:'/informationGoogle',
        element:<InformationGoogle></InformationGoogle>
      },
      {
        path:'/informationMI',
        element:<InformationMI></InformationMI>
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
