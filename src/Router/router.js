import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Authentication/Login";
import SignUp from "../Authentication/SignUp";
import ProductPage from "../Pages/ProductPage";
import PhoneNumberLogin from "../Authentication/PhoneNumberLogin";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <ProductPage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/sign_up",
        element: <SignUp />,
      },
      {
        path: "/login_with_phone",
        element: <PhoneNumberLogin />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
