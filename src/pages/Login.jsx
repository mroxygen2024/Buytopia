import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" })
});

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const result = loginSchema.safeParse(form);
    if (!result.success) {
      const errorMessages = result.error.issues.map(issue => issue.message);
      errorMessages.forEach(msg => toast.error(msg));
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/products/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Login failed');

      const { user, accessToken, refreshToken } = data.data;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("user", JSON.stringify(user));

      toast.success("Login successful!");
      navigate('/products');
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-4 py-12 dark:bg-gray-900">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-xl p-8 border border-green-300 dark:bg-gray-900">
        <h2 className="text-3xl font-bold text-green-700 mb-6 text-center dark:text-[#35955c]">Login</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-green-400 focus:border-green-500 focus:ring-green-500 rounded px-4 py-2 outline-none"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className="w-full border border-green-400 focus:border-green-500 focus:ring-green-500 rounded px-4 py-2 pr-16 outline-none"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />
            <span
              className="absolute right-4 top-2.5 text-sm text-green-600 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? 'Hide' : 'Show'}
            </span>
          </div>

          <div className="text-right text-sm">
            <Link to="/forgot-password" className="text-green-600 hover:underline">
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 rounded text-white py-2  font-semibold transition disabled:opacity-50"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <p className="mt-4 text-sm text-center">
          Don't have an account?{' '}
          <Link to="/register" className="text-green-600 hover:underline font-medium">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
