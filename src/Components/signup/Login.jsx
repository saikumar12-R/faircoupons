import React from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import loginImg from "../../assets/boy.png"; // Replace with your image path

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-600 via-accent-600 to-primary-700 flex items-center justify-center p-6">
      <div className="flex flex-col md:flex-row bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden w-full max-w-5xl">

        {/* Left Section - Illustration */}
        <div className="hidden md:flex md:w-1/2 bg-white/10 items-center justify-center p-10">
          <img
            src={loginImg}
            alt="Login illustration"
            className="w-80 md:w-[380px] animate-float"
          />
        </div>

        {/* Right Section - Form */}
        <div className="w-full md:w-1/2 bg-white p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-3">
            Welcome Back 👋
          </h2>
          <p className="text-center text-gray-500 mb-8">
            Please sign in to continue your journey!
          </p>

          <form className="space-y-6">
            {/* Email Field */}
            <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3 focus-within:border-primary-500 transition duration-200 shadow-sm">
              <FaEnvelope className="text-primary-500 mr-3 text-lg" />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
              />
            </div>

            {/* Password Field */}
            <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3 focus-within:border-primary-500 transition duration-200 shadow-sm">
              <FaLock className="text-primary-500 mr-3 text-lg" />
              <input
                type="password"
                placeholder="Password"
                className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
              />
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <a
                href="/forgot-password"
                className="text-sm text-accent-600 hover:text-accent-700 font-medium transition"
              >
                Forgot Password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-primary-500 to-accent-600 hover:from-primary-600 hover:to-accent-700 text-white font-semibold py-3 rounded-lg shadow-soft transition-transform transform hover:scale-105"
            >
              Log In
            </button>

            {/* Divider */}
            <div className="flex items-center my-6">
              <div className="flex-grow h-px bg-gray-300"></div>
              <span className="mx-3 text-gray-500 text-sm">OR</span>
              <div className="flex-grow h-px bg-gray-300"></div>
            </div>

            {/* Social Login */}
            <div className="flex justify-center gap-4">
              <button className="bg-gray-100 hover:bg-gray-200 rounded-full p-3 transition">
                <i className="fab fa-google text-red-500 text-xl"></i>
              </button>
              <button className="bg-gray-100 hover:bg-gray-200 rounded-full p-3 transition">
                <i className="fab fa-facebook-f text-blue-600 text-xl"></i>
              </button>
              <button className="bg-gray-100 hover:bg-gray-200 rounded-full p-3 transition">
                <i className="fab fa-github text-gray-800 text-xl"></i>
              </button>
            </div>

            {/* Sign Up Link */}
            <p className="text-center text-gray-700 mt-6">
              Don’t have an account?{" "}
              <a
                href="/signup"
                className="text-primary-600 hover:text-accent-600 font-semibold transition"
              >
                Sign Up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
