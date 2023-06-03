import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Authentication/Login";
import SignUp from "../Authentication/SignUp";
import ProductPage from "../Pages/ProductPage";
import PhoneNumberLogin from "../Authentication/PhoneNumberLogin";
import DashboardMain from "../Dashboard/DashboardMain";
import Profile from "../Dashboard/Profile";
import Orders from "../Dashboard/Orders";
import Cart from "../Dashboard/Cart";
import WishList from "../Dashboard/WishList";
import ChangePassword from "../Dashboard/ChangePassword";
import RequireAuth from "../Authentication/RequireAuth";

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
        path: "/cart",
        element: (
          <RequireAuth>
            <Cart />
          </RequireAuth>
        ),
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
      {
        path: "/dashboard",
        element: (
          <RequireAuth>
            <DashboardMain />
          </RequireAuth>
        ),
        children: [
          {
            path: "/dashboard/profile",
            element: <Profile />,
          },
          {
            path: "/dashboard/orders",
            element: <Orders />,
          },
          {
            path: "/dashboard/wishlist",
            element: <WishList />,
          },
          {
            path: "/dashboard/password_update",
            element: <ChangePassword />,
          },
        ],
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
