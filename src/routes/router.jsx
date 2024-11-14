import { createBrowserRouter, Navigate } from "react-router-dom";
import { HomeLayout } from "../layouts/HomeLayout";
import { CatagoriesPage } from "../Pages/CatagoriesPage";

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
    path: '/news',
    element: <h1>News</h1>
  },
  {
    path: '/login',
    element: <h1>Login</h1>
  }
])
