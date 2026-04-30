import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Mail, Lock, UserPlus } from "lucide-react";
import API from "../api/api";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      setLoading(true);
      await API.post("/auth/signup", { name, email, password });
      alert("Account Created Successfully");
      navigate("/login");
    } catch (error) {
  console.log(error.response?.data || error.message);
  alert(error.response?.data?.message || "Signup Failed");
  setLoading(false);
}
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100 px-4 py-10 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-28 left-10 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute top-10 right-10 h-72 w-72 rounded-full bg-indigo-500/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-md rounded-[2rem] border border-white/10 bg-slate-900/95 p-10 shadow-2xl backdrop-blur-xl">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-white shadow-xl">
            <UserPlus size={28} />
          </div>
          <h1 className="text-3xl font-semibold text-white">Placement AI</h1>
          <p className="mt-3 text-sm text-slate-400">Create your account and unlock client-grade career tools.</p>
        </div>

        <div className="space-y-6">
          <label className="block text-sm font-medium text-slate-300">Full name</label>
          <div className="relative">
            <User className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
            <input
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-3xl border border-slate-700 bg-slate-950/80 px-12 py-3 text-slate-100 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
            />
          </div>

          <label className="block text-sm font-medium text-slate-300">Email</label>
          <div className="relative">
            <Mail className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-3xl border border-slate-700 bg-slate-950/80 px-12 py-3 text-slate-100 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
            />
          </div>

          <label className="block text-sm font-medium text-slate-300">Password</label>
          <div className="relative">
            <Lock className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
            <input
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-3xl border border-slate-700 bg-slate-950/80 px-12 py-3 text-slate-100 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
            />
          </div>

          <button
            onClick={handleSignup}
            disabled={loading}
            className="w-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-2xl shadow-cyan-500/20 transition hover:shadow-cyan-500/40 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "Creating account..." : "Create account"}
          </button>
        </div>

        <div className="mt-8 text-center text-sm text-slate-400">
          Already have an account?{' '}
          <button onClick={() => navigate("/login")} className="font-semibold text-cyan-300 hover:text-cyan-200">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
