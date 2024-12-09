import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Root } from 'postcss';
import Home from './LayOuts/Home/Home.jsx';
import Roots from './LayOuts/Roots/Roots.jsx';
import SignIn from './LayOuts/SignIn/SignIn.jsx';
import Register from './LayOuts/Register/Register.jsx';
import AuthProvider from './Components/Providers/AuthProvider.jsx';
import NewsDetails from './Components/NewsDetails/NewsDetails.jsx';
import PribateRoute from './Components/PribateRoute/PribateRoute.jsx';
import About from './LayOuts/About/About.jsx';
import CarrerPage from './LayOuts/CarrerPage/CarrerPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Roots></Roots>,
    children:[
      {
        path:"/",
        loader:()=>fetch('/news.json'),
        element:<Home></Home>
      },
      {
        path:'/MiddleSide/:id',
        element:<PribateRoute><NewsDetails></NewsDetails></PribateRoute>
      },
      {
        path:"/About",
        element:<About></About>
      },
      {
        path:"/CarrerPage",
        element:<CarrerPage></CarrerPage>
      },
      {
        path:"/SignIn",
        element:<SignIn></SignIn>
      },
      {
        path:"/Register",
        element:<Register></Register>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
   <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
