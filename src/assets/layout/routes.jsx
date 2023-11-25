import React from 'react'
import Layout from "../layout/Layout.jsx";
import Home from '../component/dasboard/home/Home.jsx';

import DasboardLayout from '../layout/DasboardLayout.jsx';

import { createBrowserRouter } from 'react-router-dom';
import HomeWeb from '../component/web/homeWeb/HomeWeb.jsx';
import CategoriesDash from '../component/dasboard/categories/CategoriesDash.jsx';
import Categories from '../component/web/categories/Categories.jsx';
import Register from '../component/web/register/Register.jsx';

 export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
    children:[
        
        {

            path: "register",
            element: <Register />
        },
  
        
        {
path: 'home',
element:<HomeWeb />

    
    },
  {
    path: 'categories',
    element: <Categories />
  },
  {
    path: '*',
    element:<h2>
        not found 
    </h2>
  }
]
}
 , {
    path: "/dashboard",
    element: <DasboardLayout />,
    children:[{
path: 'home',
element:<Home />

    
    },
  {
    path: 'categories',
    element: <CategoriesDash />
  
  }
  
  ]

 }
]
);

