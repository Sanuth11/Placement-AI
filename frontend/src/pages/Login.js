import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogIn, Mail, Lock } from "lucide-react";
import API from "../api/api";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {

    try {

      const res = await API.post("/auth/login", {
        email,
        password
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      navigate("/");
      window.location.reload();

    } catch (error) {
      alert("Login Failed");
    }

  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-purple-100">

      <div className="bg-white shadow-2xl rounded-2xl p-10 w-[420px] border">

        {/* Logo */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-indigo-600">
            Placement AI 🤖
          </h1>
          <p className="text-gray-500 text-sm">
            Career Intelligence Platform
          </p>
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold mb-6 text-center">
          Welcome User 👋
        </h2>

        {/* Email */}
        <div className="mb-4 relative">
          <Mail className="absolute left-3 top-3 text-gray-400" size={18}/>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>

        {/* Password */}
        <div className="mb-6 relative">
          <Lock className="absolute left-3 top-3 text-gray-400" size={18}/>
          <input
            type="password"
            placeholder="Password"
            className="w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>

        {/* Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 font-medium hover:shadow-lg transition"
        >
          <LogIn size={18}/>
          Login
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 border"></div>
          <span className="px-3 text-gray-400 text-sm">
            OR
          </span>
          <div className="flex-1 border"></div>
        </div>

        {/* Signup */}
        <p className="text-center text-gray-600">

          Don't have an account?

          <span
            onClick={()=>navigate("/signup")}
            className="text-indigo-600 font-medium ml-1 cursor-pointer hover:underline"
          >
            Create Account
          </span>

        </p>

      </div>

    </div>
  );

};

export default Login;