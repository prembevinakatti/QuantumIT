import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../api/axios";
import toast from "react-hot-toast";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    dob: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }

    setLoading(true);

    try {
      const res = await api.post("/auth/register", formData, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      console.log(res.data);
      navigate("/");
      toast.success("Registration successful!");
      setFormData({ username: "", dob: "", email: "", password: "" });
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-500 to-teal-700">
      <form
        onSubmit={handleSubmit}
        className="w-[360px] bg-slate-800 rounded-xl shadow-2xl px-8 py-10 relative"
      >
        <div className="absolute -top-6 left-1/2 -translate-x-1/2">
          <div className="bg-cyan-400 text-slate-800 font-semibold px-6 py-2 rounded-md shadow-md">
            REGISTER
          </div>
        </div>

        <div className="flex justify-center mt-8 mb-6">
          <div className="w-20 h-20 rounded-full border-2 border-slate-500 flex items-center justify-center">
            <svg
              className="w-10 h-10 text-slate-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5z" />
            </svg>
          </div>
        </div>

        <div className="space-y-4">
          <input
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            className="w-full bg-slate-600 text-slate-100 px-4 py-3 rounded-md focus:ring-2 focus:ring-cyan-400"
            required
          />

          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="w-full bg-slate-600 text-slate-100 px-4 py-3 rounded-md focus:ring-2 focus:ring-cyan-400"
            required
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full bg-slate-600 text-slate-100 px-4 py-3 rounded-md focus:ring-2 focus:ring-cyan-400"
            required
          />

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            minLength={8}
            className="w-full bg-slate-600 text-slate-100 px-4 py-3 rounded-md focus:ring-2 focus:ring-cyan-400"
            required
          />
        </div>

        {error && <p className="mt-3 text-sm text-red-400">{error}</p>}
        {success && <p className="mt-3 text-sm text-green-400">{success}</p>}

        <button
          disabled={loading}
          className="mt-6 w-full bg-cyan-400 text-slate-800 font-semibold py-3 rounded-md hover:bg-cyan-300 transition disabled:opacity-60"
        >
          {loading ? "Creating..." : "CREATE ACCOUNT"}
        </button>

        <p className="mt-4 text-center text-sm text-slate-400">
          Already have an account?{" "}
          <Link
            to="/"
            className="text-cyan-400 hover:text-cyan-300 font-medium"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
