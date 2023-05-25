import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => {
        setLoginError(err.message);
        console.log(err.message);
      });
  };
  return (
    <div>
      <div className="flex justify-center my-10 border-b-2 ">
        <div className="flex -mb-0.5">
          <NavLink
            to={"/login"}
            className={({ isActive }) =>
              isActive
                ? "text-red-500 xl:px-14 px-10 py-2 border-b-2 border-red-500"
                : "text-black xl:px-14 px-10 py-2 border-b-2 border-transparent"
            }
          >
            Login
          </NavLink>
          <NavLink
            to={"/sign_up"}
            className={({ isActive }) =>
              isActive
                ? "text-red-500 xl:px-14 px-10 py-2 border-b-2 border-red-500"
                : "text-black xl:px-14 px-10 py-2 border-b-2 border-transparent"
            }
          >
            Registration
          </NavLink>
        </div>
      </div>
      <div className="flex justify-center mb-10 px-5">
        <div className="max-w-sm w-full">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl">Login</h2>
            <div className="flex gap-2">
              <i className="fa-brands border-2 rounded-full p-2 fa-google hover:bg-yellow-500 hover:text-white duration-300 hover:border-yellow-500"></i>
              <i className="fa-brands border-2 rounded-full p-2 fa-facebook hover:bg-blue-500 hover:text-white duration-300 hover:border-blue-500"></i>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Email */}
            <div className="form-control w-full max-w-sm">
              <label className="label">
                <span className="label-text text-black">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-sm"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid email",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>

            {/* Password */}
            <div className="form-control w-full max-w-sm">
              <label className="label">
                <span className="label-text text-black">Password</span>
              </label>
              <input
                type="password"
                placeholder="Your Password"
                className="input input-bordered w-full max-w-sm"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 characters or longer",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>

            {setLoginError !== "" && (
              <p className="text-red-500">{loginError}</p>
            )}

            {/* submit button */}
            <input
              type="submit"
              value="Login now"
              className="btn w-full mt-5 btn-outline text-gradient-to-tr from-[#0F172A] to-[#374151]"
            />
          </form>
          <div className="divider">OR</div>
          <Link
            className="btn btn-outline w-full text-emerald-500 border-emerald-500"
            to={"/login_with_phone"}
          >
            Continue with phone
          </Link>
          <div className="mt-5 flex justify-between">
            <p>Forgot Password (modal)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

//  <div className="flex items-center justify-center min-h-screen">
//         <div className="xl:mx-20 shadow-lg lg:flex w-full lg:max-w-7xl max-w-sm bg-gradient-to-tr from-pink-500 via-rose-500 to-red-500">
//           <div className="p-10 xl:w-1/2 w-full flex justify-center bg-white">
//             <div className="max-w-sm w-full">
//               <div className="flex justify-between items-center">
//                 <h2 className="text-2xl">Sign In</h2>
//                 <div className="flex gap-2">
//                   <i className="fa-brands border-2 rounded-full p-2 fa-google"></i>
//                   <i className="fa-brands border-2 rounded-full p-2 fa-facebook"></i>
//                 </div>
//               </div>
//               <form onSubmit={handleSubmit(onSubmit)}>
//                 {/* Email */}
//                 <div className="form-control w-full max-w-sm">
//                   <label className="label">
//                     <span className="label-text text-black">Email</span>
//                   </label>
//                   <input
//                     type="email"
//                     placeholder="Your Email"
//                     className="input input-bordered w-full max-w-sm"
//                     {...register("email", {
//                       required: {
//                         value: true,
//                         message: "Email is required",
//                       },
//                       pattern: {
//                         value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
//                         message: "Provide a valid email",
//                       },
//                     })}
//                   />
//                   <label className="label">
//                     {errors.email?.type === "required" && (
//                       <span className="label-text-alt text-red-500">
//                         {errors.email.message}
//                       </span>
//                     )}
//                     {errors.email?.type === "pattern" && (
//                       <span className="label-text-alt text-red-500">
//                         {errors.email.message}
//                       </span>
//                     )}
//                   </label>
//                 </div>

//                 {/* Password */}
//                 <div className="form-control w-full max-w-sm">
//                   <label className="label">
//                     <span className="label-text text-black">Password</span>
//                   </label>
//                   <input
//                     type="password"
//                     placeholder="Your Password"
//                     className="input input-bordered w-full max-w-sm"
//                     {...register("password", {
//                       required: {
//                         value: true,
//                         message: "Password is required",
//                       },
//                       minLength: {
//                         value: 6,
//                         message: "Must be 6 characters or longer",
//                       },
//                     })}
//                   />
//                   <label className="label">
//                     {errors.password?.type === "required" && (
//                       <span className="label-text-alt text-red-500">
//                         {errors.password.message}
//                       </span>
//                     )}
//                     {errors.password?.type === "minLength" && (
//                       <span className="label-text-alt text-red-500">
//                         {errors.password.message}
//                       </span>
//                     )}
//                   </label>
//                 </div>

//                 {setLoginError !== "" && (
//                   <p className="text-red-500">{loginError}</p>
//                 )}

//                 {/* submit button */}
//                 <input
//                   type="submit"
//                   value="Login"
//                   className="btn border-0 w-full mt-5 bg-gradient-to-tr from-pink-500 via-rose-500 to-red-500"
//                 />
//               </form>
//               <div className="mt-5 flex justify-between">
//                 <div className="flex gap-2">
//                   <input type="checkbox" name="Remember Me" id="" />
//                   <p>Remember Me</p>
//                 </div>
//                 <Link to={"/forgot_password"}>Forgot Password</Link>
//               </div>
//             </div>
//           </div>
//           <div className=" xl:w-1/2 w-full flex justify-center items-center text-center text-white p-5">
//             <div>
//               <h2 className="text-2xl font-bold">Welcome to Login</h2>
//               <p className="my-3">Don't have an account?</p>
//               <Link
//                 to={"/sign_up"}
//                 className="btn btn-outline text-white hover:bg-white hover:border-white hover:text-gray-500"
//               >
//                 Sign UP
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>  *
