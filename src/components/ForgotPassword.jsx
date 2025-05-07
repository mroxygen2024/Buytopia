import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return toast.error("Email is required");

    try {
      setLoading(true);
      const res = await fetch("https://ecommerce-backend-tqgh.onrender.com/api/v1/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to send reset code");

      toast.success("Reset code sent to your email.");
      navigate(`/reset-password?email=${encodeURIComponent(email)}`);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-4 py-12">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-xl p-8 border border-green-300">
        <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">Forgot Password</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-green-400 focus:border-green-500 focus:ring-green-500 rounded px-4 py-2 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Reset Code"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
