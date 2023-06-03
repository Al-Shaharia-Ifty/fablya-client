import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const DashboardMain = () => {
  const { logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((err) => console.log(err.message));
  };

  return (
    <div>
      <div className="lg:flex my-10">
        <div>
          <div className="block p-5 border-2 rounded-lg shadow-xl mx-5 lg:mx-10 2xl:mx-20 mb-10 lg:mb-0">
            <div className="my-2 text-lg ">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "flex gap-2 items-center text-teal-500"
                    : "flex gap-2 items-center hover:text-yellow-500 duration-300"
                }
                to={"/dashboard/profile"}
              >
                <i className="fa-regular fa-user"></i>
                <p>Profile</p>
              </NavLink>
            </div>
            <div className="my-2 text-lg ">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "flex gap-2 items-center text-teal-500"
                    : "flex gap-2 items-center hover:text-yellow-500 duration-300"
                }
                to={"/dashboard/orders"}
              >
                <i className="fa-solid fa-cart-shopping"></i>
                <p>Orders</p>
              </NavLink>
            </div>
            <div className="my-2 text-lg ">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "flex gap-2 items-center text-teal-500"
                    : "flex gap-2 items-center hover:text-yellow-500 duration-300"
                }
                to={"/cart"}
              >
                <i className="fa-solid fa-cart-plus"></i>
                <p>Cart</p>
              </NavLink>
            </div>
            <div className="my-2 text-lg ">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "flex gap-2 items-center text-teal-500"
                    : "flex gap-2 items-center hover:text-yellow-500 duration-300"
                }
                to={"/dashboard/wishlist"}
              >
                <i className="fa-regular fa-heart"></i>
                <p>Wishlist</p>
              </NavLink>
            </div>
            <div className="my-2 text-lg ">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "flex gap-2 items-center text-teal-500"
                    : "flex gap-2 items-center hover:text-yellow-500 duration-300"
                }
                to={"/dashboard/password_update"}
              >
                <i className="fa-solid fa-unlock"></i>
                <p>Change Password</p>
              </NavLink>
            </div>
            <div
              className="my-2 text-lg flex gap-2 items-center text-red-500 cursor-pointer"
              onClick={() => {
                handleLogOut();
                localStorage.removeItem("accessToken");
              }}
            >
              <i className="fa-solid fa-power-off"></i>
              Logout
            </div>
          </div>
        </div>

        <Outlet />
      </div>
    </div>
  );
};

export default DashboardMain;
