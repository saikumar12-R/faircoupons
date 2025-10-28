import React from "react";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4">
      <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 w-full max-w-md">
        {/* Header */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Log in to access your account
        </p>

        {/* Form */}
        <form className="space-y-5">
          {/* Email */}
          <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 focus-within:border-indigo-500 transition">
            <FaEnvelope className="text-gray-500 mr-3" />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full outline-none text-gray-700"
            />
          </div>

          {/* Password */}
          <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 focus-within:border-indigo-500 transition">
            <FaLock className="text-gray-500 mr-3" />
            <input
              type="password"
              placeholder="Password"
              className="w-full outline-none text-gray-700"
            />
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end">
            <a
              href="/forgot-password"
              className="text-sm text-indigo-600 hover:underline"
            >
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-full transition-transform transform hover:scale-105"
          >
            Log In
          </button>

          {/* Sign Up Link */}
          <p className="text-center text-gray-600 mt-4">
            Don’t have an account?{" "}
            <a
              href="/signup"
              className="text-indigo-600 hover:underline font-semibold"
            >
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
