import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  FileText,
  Sparkles,
  MessageSquare,
  Brain,
  CheckCircle,
  Briefcase,
  History,
  LogOut,
  User
} from "lucide-react";

const Layout = ({ children }) => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  // Get user from localStorage
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  const menu = [
    { name: "Dashboard", path: "/", icon: LayoutDashboard },
    { name: "Resume Analyzer", path: "/upload", icon: FileText },
    { name: "Resume Optimizer", path: "/optimizer", icon: Sparkles },
    { name: "Mock Interview", path: "/interview", icon: Brain },
    { name: "Answer Evaluation", path: "/evaluate", icon: CheckCircle },
    { name: "Job Recommendations", path: "/jobs", icon: Briefcase },
    { name: "AI Career Chat", path: "/chat", icon: MessageSquare },
    { name: "History", path: "/history", icon: History }
  ];

  return (
    <div className="flex h-screen bg-gray-100">

      {/* Sidebar */}
      <div className="w-64 bg-white border-r shadow-sm">

        {/* Logo */}
        <div className="p-6 border-b">
          <h1 className="text-2xl font-bold text-indigo-600">
            Placement AI
          </h1>
          <p className="text-sm text-gray-400">
            Career Intelligence Platform
          </p>
        </div>

        {/* Menu */}
        <div className="p-4 space-y-1">

          {menu.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 p-3 rounded-lg transition 
                ${
                  location.pathname === item.path
                    ? "bg-indigo-500 text-white shadow"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
              >
                <Icon size={18} />
                {item.name}
              </Link>
            );
          })}

        </div>

      </div>

      {/* Main */}
      <div className="flex-1 flex flex-col">

        {/* Navbar */}
        <div className="bg-white border-b px-8 py-4 flex justify-between items-center">

          <h2 className="text-xl font-semibold text-gray-700">
            Placement AI 🧠
          </h2>

          {/* User Section */}
          <div className="relative flex items-center gap-3">

            <span className="text-gray-600 font-medium">
              Welcome {user?.name || "User"}
            </span>

            <div
              onClick={() => setOpen(!open)}
              className="w-9 h-9 rounded-full bg-indigo-500 flex items-center justify-center text-white cursor-pointer"
            >
              <User size={18}/>
            </div>

            {/* Dropdown */}
            {open && (
              <div className="absolute right-0 top-12 bg-white shadow-lg rounded-lg w-44 py-2 border z-50">

                <div className="px-4 py-2 text-sm text-gray-500 border-b">
                  {user?.email}
                </div>

                <button
                  onClick={logout}
                  className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-red-500"
                >
                  <LogOut size={16}/>
                  Logout
                </button>

              </div>
            )}

          </div>

        </div>

        {/* Content */}
        <div className="p-8 overflow-y-auto">
          {children}
        </div>

      </div>

    </div>
  );
};

export default Layout;