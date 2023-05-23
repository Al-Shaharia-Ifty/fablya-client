import React, { useContext, useState } from "react";
import webLogo from "../Assets/web-logo2.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
// balgruf

const Navbar = () => {
  const [dropHide, setDropHide] = useState(false);
  const { user } = useContext(AuthContext);
  return (
    <div>
      {/* navbar logo, search bar, cart, login */}
      <div className="flex justify-center text-white bg-slate-900">
        <div className="max-w-[2000px] 2xl:px-32 xl:px-10 w-full ">
          <div className="md:flex items-center gap-10">
            {/* web logo */}
            <div className="md:hidden flex items-center mx-4 my-4 gap-4">
              <Link to={"/"}>
                <img
                  className="h-10 md:my-4"
                  src={webLogo}
                  alt="website logo"
                />
              </Link>
              {/* search box */}
              <div className="flex flex-1">
                <input
                  className="input w-full rounded-r-none text-black"
                  type="text"
                />
                <button className="bg-yellow-500 rounded-r-lg">
                  <i className="fa-solid fa-magnifying-glass p-2 md:text-2xl"></i>
                </button>
              </div>
            </div>
            <Link className="md:flex hidden" to={"/"}>
              <img className="h-10 md:my-4" src={webLogo} alt="website logo" />
            </Link>
            {/* search box */}
            <div className="md:flex hidden flex-1">
              <input
                className="input w-full rounded-r-none text-black"
                type="text"
              />
              <button className="bg-yellow-500 rounded-r-lg">
                <i className="fa-solid fa-magnifying-glass p-2 md:text-2xl"></i>
              </button>
            </div>

            {/* cart */}
            <div className="flex-1 flex justify-end xl:gap-4 pb-3 md:py-0">
              <div className="flex items-center lg:text-xl md:text-md">
                <div className="relative">
                  <p className="absolute bg-red-500 rounded-full px-1.5 text-sm top-0 right-0">
                    0
                  </p>
                  <i className="fa-regular fa-heart text-3xl mr-2"></i>
                </div>
                <p>Favourite</p>
              </div>
              <div className="flex items-center lg:text-xl md:text-md mr-4">
                <div className="relative">
                  <p className="absolute bg-red-500 rounded-full px-1.5 text-sm top-0 right-0">
                    0
                  </p>
                  <i className="fa-solid fa-cart-shopping text-3xl mr-2"></i>
                </div>
                <p>Cart</p>
              </div>
              {user?.uid ? (
                <Link to={"/profile"} className="flex items-center text-xl">
                  <i className="fa-solid fa-user text-2xl mr-2"></i>
                </Link>
              ) : (
                <Link to={"/login"} className="flex items-center text-xl">
                  <i className="fa-solid fa-arrow-right-to-bracket text-2xl mr-2"></i>
                  <p>Login</p>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* categories, home, blog, contact */}
      <div className="flex justify-center bg-gray-700">
        <div className="max-w-[2000px] 2xl:px-32 xl:px-10 w-full flex items-center">
          <div className="dropdown">
            <label
              tabIndex={0}
              onClick={() => setDropHide(!dropHide)}
              onBlur={() => setDropHide(false)}
              className="btn bg-gray-700 hover:bg-gray-700 m-1 p-0 md:p-4 md:border-2 border-0 md:border-white md:hover:border-white"
            >
              <h2>Categories</h2>
              <i className="fa-solid fa-bars md:ml-10 ml-5"></i>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow-lg bg-base-100 w-52"
            >
              <li className="dropdown dropdown-right dropdown-hover">
                <label tabIndex={0} className=" flex justify-between">
                  <p>MENS</p>
                  <i className="fa-solid fa-angle-right"></i>
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow-lg bg-base-100 w-52"
                >
                  <li>
                    <Link
                      to={"/mans/pangabi"}
                      // onClick={() => setDropHide(false)}
                    >
                      PANJABI
                    </Link>
                  </li>
                  <li>
                    <Link to={"/mans/shirt"} onClick={() => setDropHide(false)}>
                      SHIRT
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => setDropHide(false)}
                      to={"/mans/t-shirt"}
                    >
                      T-SHIRT
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => setDropHide(false)}
                      to={"/mans/tank-top"}
                    >
                      TANK TOP
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => setDropHide(false)}
                      to={"/mans/bottom"}
                    >
                      BOTTOM
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="dropdown dropdown-right dropdown-hover">
                <label tabIndex={0} className=" flex justify-between">
                  <p>WOMENS</p>
                  <i className="fa-solid fa-angle-right"></i>
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow-lg bg-base-100 w-52"
                >
                  <li>
                    <Link onClick={() => setDropHide(false)} to={"/man/shart"}>
                      Shart
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => setDropHide(false)} to={"/man/pant"}>
                      Pant
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => setDropHide(false)} to={"/man/show"}>
                      Show
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="dropdown dropdown-right dropdown-hover">
                <label tabIndex={0} className=" flex justify-between">
                  <p>KIDS</p>
                  <i className="fa-solid fa-angle-right"></i>
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow-lg bg-base-100 w-52"
                >
                  <li>
                    <Link onClick={() => setDropHide(false)} to={"/man/shart"}>
                      Shart
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => setDropHide(false)} to={"/man/pant"}>
                      Pant
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => setDropHide(false)} to={"/man/show"}>
                      Show
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="dropdown dropdown-right dropdown-hover">
                <label tabIndex={0} className=" flex justify-between">
                  <p>NEWBORNS</p>
                  <i className="fa-solid fa-angle-right"></i>
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow-lg bg-base-100 w-52"
                >
                  <li>
                    <Link onClick={() => setDropHide(false)} to={"/man/shart"}>
                      Shart
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => setDropHide(false)} to={"/man/pant"}>
                      Pant
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => setDropHide(false)} to={"/man/show"}>
                      Show
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="dropdown dropdown-right dropdown-hover">
                <label tabIndex={0} className=" flex justify-between">
                  <p>ACCESSORIES</p>
                  <i className="fa-solid fa-angle-right"></i>
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow-lg bg-base-100 w-52"
                >
                  <li>
                    <Link onClick={() => setDropHide(false)} to={"/man/shart"}>
                      Shart
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => setDropHide(false)} to={"/man/pant"}>
                      Pant
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => setDropHide(false)} to={"/man/show"}>
                      Show
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="dropdown dropdown-right dropdown-hover">
                <label tabIndex={0} className=" flex justify-between">
                  <p>FOOTWEAR</p>
                  <i className="fa-solid fa-angle-right"></i>
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow-lg bg-base-100 w-52"
                >
                  <li>
                    <Link onClick={() => setDropHide(false)} to={"/man/shart"}>
                      Shart
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => setDropHide(false)} to={"/man/pant"}>
                      Pant
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => setDropHide(false)} to={"/man/show"}>
                      Show
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="dropdown dropdown-right dropdown-hover">
                <label tabIndex={0} className=" flex justify-between">
                  <p>HOME & GIFT</p>
                  <i className="fa-solid fa-angle-right"></i>
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow-lg bg-base-100 w-52"
                >
                  <li>
                    <Link onClick={() => setDropHide(false)} to={"/man/shart"}>
                      Shart
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => setDropHide(false)} to={"/man/pant"}>
                      Pant
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => setDropHide(false)} to={"/man/show"}>
                      Show
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="dropdown dropdown-right dropdown-hover">
                <label tabIndex={0} className=" flex justify-between">
                  <p>TOYS</p>
                  <i className="fa-solid fa-angle-right"></i>
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow-lg bg-base-100 w-52"
                >
                  <li>
                    <Link onClick={() => setDropHide(false)} to={"/man/shart"}>
                      Shart
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => setDropHide(false)} to={"/man/pant"}>
                      Pant
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => setDropHide(false)} to={"/man/show"}>
                      Show
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            {/* {dropHide && (
              
            )} */}
          </div>

          {/* navigate link */}
          <div className="flex items-center text-white ml-10 gap-10">
            <Link to={"/"}>
              <p>Home</p>
            </Link>
            <Link to={"/blogs"}>
              <p>Blogs</p>
            </Link>
            <Link to={"/contact"}>
              <p>Contact</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
