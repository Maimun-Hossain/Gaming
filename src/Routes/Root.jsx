import {
    createBrowserRouter,
  } from "react-router-dom";
import Routes from "./Routes";
import Home from "../Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Error from "../Components/Error/Error";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Routes></Routes>,
      errorElement: <Error></Error>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/register",
            element: <Register></Register>
        },
      ]
    },
  ]);

  export default router;