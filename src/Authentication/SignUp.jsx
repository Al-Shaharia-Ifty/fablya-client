import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { createUser } = useContext(AuthContext);

  let signInErrorMessage;

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen">
        <div className="xl:mx-20 shadow-lg lg:flex flex-row-reverse w-full lg:max-w-7xl max-w-sm bg-gradient-to-tr from-purple-500 via-violet-500 to-indigo-500">
          <div className="p-10 xl:w-1/2 w-full flex justify-center bg-white">
            <div className="max-w-sm w-full">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl">Sign Up</h2>
                <div className="flex gap-2">
                  <i className="fa-brands border-2 rounded-full p-2 fa-google"></i>
                  <i className="fa-brands border-2 rounded-full p-2 fa-facebook"></i>
                </div>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Name */}
                <div className="form-control w-full max-w-sm">
                  <label className="label">
                    <span className="label-text text-black">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered w-full max-w-sm"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Name is required",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.name?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.name.message}
                      </span>
                    )}
                  </label>
                </div>
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

                {signInErrorMessage}

                {/* submit button */}
                <input
                  type="submit"
                  value="Sign up"
                  className="btn border-0 w-full mt-5 bg-gradient-to-tr from-purple-500 via-violet-500 to-indigo-500"
                />
              </form>
              {/* <div className="mt-5 flex justify-between">
                <div className="flex gap-2">
                  <input type="checkbox" name="Remember Me" id="" />
                  <p>Remember Me</p>
                </div>
                <Link to={"/forgot_password"}>Forgot Password</Link>
              </div> */}
            </div>
          </div>
          <div className=" xl:w-1/2 w-full flex justify-center items-center text-center text-white p-5">
            <div>
              <h2 className="text-2xl font-bold">Welcome to Fablya</h2>
              <p className="my-3">Already have an account?</p>
              <Link
                to={"/login"}
                className="btn btn-outline text-white hover:bg-white hover:border-white hover:text-gray-500"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
