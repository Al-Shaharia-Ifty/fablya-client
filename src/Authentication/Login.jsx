import React from "react";
import { useForm } from "react-hook-form";
import { Link, NavLink } from "react-router-dom";
import useLoginAuth from "../Hooks/useLoginAuth";
import useGoogleAuth from "../Hooks/useGoogleAuth";
import useFacebookAuth from "../Hooks/useFacebookAuth";
import LoadingButton from "../Shared/LoadingButton";

const Login = () => {
  const [emailLoading, emailError, loginWithEmail] = useLoginAuth();
  const [googleLoading, googleError, loginWithGoogle] = useGoogleAuth();
  const [facebookLoading, facebookError, loginWithFacebook] = useFacebookAuth();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  let errorMessage;

  if (emailError || googleError || facebookError) {
    errorMessage = (
      <p className="text-red-500">
        {emailError || googleError || facebookError}
      </p>
    );
  }

  const onSubmit = (data) => {
    loginWithEmail(data);
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
        <div className="max-w-sm w-full hover:shadow-xl duration-300 p-5 rounded-lg">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl">Login</h2>
            <div className="flex gap-2">
              <i
                onClick={() => loginWithGoogle()}
                className="fa-brands border-2 rounded-full p-2 fa-google hover:bg-yellow-500 hover:text-white duration-300 hover:border-yellow-500"
              ></i>
              <i
                onClick={() => loginWithFacebook()}
                className="fa-brands border-2 rounded-full p-2 fa-facebook hover:bg-blue-500 hover:text-white duration-300 hover:border-blue-500"
              ></i>
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

            {errorMessage}

            {/* submit button */}
            {emailLoading || googleLoading || facebookLoading ? (
              <LoadingButton>Loading</LoadingButton>
            ) : (
              <input
                type="submit"
                value="login now"
                className="btn border-0 w-full mt-5 bg-gradient-to-tr from-[#0F172A] to-[#374151]"
              />
            )}
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
