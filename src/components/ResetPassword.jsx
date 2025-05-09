import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const initialEmail = searchParams.get("email") || "";

  const [email, setEmail] = useState(initialEmail);
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleReset = async (e) => {
    e.preventDefault();

    if (!email || !code || !password) return toast.error("All fields are required");
    if (password.length < 6) return toast.error("Password must be at least 6 characters");

    try {
      setLoading(true);

      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/auth/reset-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, code, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Reset failed");

      toast.success("Password reset successful!");
      navigate("/login");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-4 py-12 dark:bg-gray-900">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-xl p-8 border border-green-300 dark:bg-gray-900 dark:border-green-500">
        <h2 className="text-3xl font-bold text-green-700 mb-6 text-center dark:text-[#35955c]">Reset Password</h2>
        
        <form onSubmit={handleReset} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-green-400 focus:border-green-500 focus:ring-green-500 rounded px-4 py-2 outline-none dark:bg-gray-800 dark:text-white dark:border-green-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter reset code"
            className="w-full border border-green-400 focus:border-green-500 focus:ring-green-500 rounded px-4 py-2 outline-none dark:bg-gray-800 dark:text-white dark:border-green-500"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter new password"
            className="w-full border border-green-400 focus:border-green-500 focus:ring-green-500 rounded px-4 py-2 outline-none dark:bg-gray-800 dark:text-white dark:border-green-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition disabled:opacity-50 dark:bg-green-600 dark:hover:bg-green-700"
            disabled={loading}
          >
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
