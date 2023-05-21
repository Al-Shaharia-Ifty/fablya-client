import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  return (
    <div>
      <div className="flex items-center min-h-screen">
        <div className="xl:mx-20 shadow-lg flex w-full bg-gradient-to-tr from-purple-500 via-violet-500 to-indigo-500">
          <div className="p-10 xl:w-1/2 bg-white">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl">Sign In</h2>
              <div className="flex gap-2">
                <i className="fa-brands border-2 rounded-full p-2 fa-google"></i>
                <i className="fa-brands border-2 rounded-full p-2 fa-facebook"></i>
                <i className="fa-brands border-2 rounded-full p-2 fa-twitter"></i>
              </div>
            </div>
            <div></div>
          </div>
          <div className=" xl:w-1/2 flex justify-center items-center text-center text-white">
            <div>
              <h2 className="text-2xl font-bold">Welcome to Login</h2>
              <p className="my-3">Don't have an account?</p>
              <button className="btn btn-outline text-white hover:bg-white hover:border-white hover:text-gray-500">
                Sign UP
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
