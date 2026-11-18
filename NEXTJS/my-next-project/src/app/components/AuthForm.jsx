
"use client";

import { useState } from "react";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const endpoint = isLogin
        ? "/api/auth/login"
        : "/api/auth/register";

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          isLogin
            ? {
                email: form.email,
                password: form.password,
              }
            : form
        ),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }
    } catch (error) {
        console.error("Error:", error);
    } 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 px-4">

      <div className="w-full max-w-md rounded-2xl bg-gray-900 border border-gray-800 p-8 shadow-xl">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-green-400 mb-2">
          {isLogin ? "Welcome Back" : "Create Account"}
        </h1>

        <p className="text-center text-gray-400 mb-8">
          {isLogin
            ? "Login to your account"
            : "Register a new account"}
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Name - Register only */}
          {!isLogin && (
            <div>
              <label className="block text-white mb-2">
                Name
              </label>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full rounded-lg bg-gray-800 border border-gray-700 text-white px-4 py-3 outline-none focus:border-green-500"
              />
            </div>
          )}

          {/* Email */}
          <div>
            <label className="block text-white mb-2">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full rounded-lg bg-gray-800 border border-gray-700 text-white px-4 py-3 outline-none focus:border-green-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-white mb-2">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              className="w-full rounded-lg bg-gray-800 border border-gray-700 text-white px-4 py-3 outline-none focus:border-green-500"
            />
          </div>

        

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg disabled:opacity-50"
          >
          </button>

        </form>

        {/* Switch Login / Register */}
        <p className="text-center text-gray-400 mt-6">

          {isLogin
            ? "Don't have an account?"
            : "Already have an account?"}

          <button
            type="button"
            onClick={() => {
              setIsLogin(!isLogin);
    
              setForm({
                name: "",
                email: "",
                password: "",
              });
            }}
            className="text-green-400 ml-2 hover:underline font-semibold"
          >
            {isLogin ? "Register" : "Login"}
          </button>

        </p>

      </div>
    </div>
  );
}
