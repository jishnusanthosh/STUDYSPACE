
import { useState } from "react";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      setMessage("Please fill in all fields.");
      return;
    }

    setMessage("Form validated! Ready for backend integration.");
  };

  return (
    <div className="min-h-screen bg-[#0B0F0E] flex items-center justify-center p-5 text-white">

      <div className="w-full max-w-md bg-[#151B19] border border-green-900/50 rounded-2xl p-8 shadow-2xl">

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">
            Welcome <span className="text-emerald-500">Back!</span>
          </h1>

          <p className="text-gray-400 mt-2 text-sm">
            Sign in to continue to your account
          </p>
        </div>

        {/* <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label htmlFor="email" className="block text-sm mb-2">
              Email Address
            </label>

            <input
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              className="w-full bg-[#0B0F0E] border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-emerald-500 transition"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm mb-2">
              Password
            </label>

            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
                minLength={6}
                className="w-full bg-[#0B0F0E] border border-gray-700 rounded-lg px-4 py-3 pr-20 outline-none focus:border-emerald-500 transition"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-500 text-sm cursor-pointer"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center text-sm gap-3">

            <label className="flex items-center gap-2 text-gray-400 cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="accent-emerald-500"
              />
              Remember me
            </label>

            <span className="text-gray-500">
              Forgot password?
            </span>
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-black font-semibold py-3 rounded-lg transition cursor-pointer"
          >
            Login
          </button>

          {message && (
            <p role="status" className="text-center text-sm text-emerald-400">
              {message}
            </p>
          )}

        </form> */}

        {/* <div className="mt-8 text-center text-sm text-gray-400">
          Don't have an account?{" "}
          <span className="text-emerald-500">
            Sign up
          </span>
        </div> */}

      </div>
    </div>
  );
}

export default Login;
