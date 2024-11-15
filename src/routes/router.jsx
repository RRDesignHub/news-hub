import { createBrowserRouter, Navigate } from "react-router-dom";
import { HomeLayout } from "../layouts/HomeLayout";
import { CatagoriesPage } from "../Pages/CatagoriesPage";
import { AuthLayout } from "../layouts/AuthLayout";
import { Login } from "../Pages/Login";
import { Register } from "../Pages/Register";
import { NewsDetails } from "../Pages/NewsDetails";
import { PrivateRoute } from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path:'/',
    element: <HomeLayout></HomeLayout>,
    children:[
      {
        path: '',
        element: <Navigate to='/category/01'></Navigate>
      },
      {
        path:'/category/:id',
        loader: ({params})=> fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
        element:<CatagoriesPage></CatagoriesPage>
      }
    ]
  },
  {
    path: '/news/:id',
    element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
    loader:({params})=>fetch(`https://openapi.programming-hero.com/api/news/${params.id}`),
  },
  {
    path: '/auth',
    element: <AuthLayout></AuthLayout>,
    children:[
      {
        path: '/auth/login',
        element:<Login></Login>,
      },
      {
        path: '/auth/register',
        element:<Register></Register>
      }
    ]
  }
])
