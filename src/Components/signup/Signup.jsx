import React from "react";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import laptop from "../../assets/boy.png"

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center  p-4">
     <div className="md:w-1/2 flex flex-col">
                <img src={laptop}/>
     </div>
     
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md md:w-1/2">
        {/* Header */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create Account
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Sign up to get started with your journey!
        </p>

        {/* Form */}
        <form className="space-y-5">
          {/* Username */}
          <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 focus-within:border-indigo-500 transition">
            <FaUser className="text-gray-500 mr-3" />
            <input
              type="text"
              placeholder="Full Name"
              className="w-full outline-none text-gray-700"
            />
          </div>

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

          {/* Confirm Password */}
          <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 focus-within:border-indigo-500 transition">
            <FaLock className="text-gray-500 mr-3" />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full outline-none text-gray-700"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-full transition-transform transform hover:scale-105"
          >
            Sign Up
          </button>

          {/* Already have an account */}
          <p className="text-center text-gray-600 mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-indigo-600 hover:underline font-semibold">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
