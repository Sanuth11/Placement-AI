import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  FileText,
  Sparkles,
  MessageSquare,
  Brain,
  CheckCircle,
  Briefcase,
  History
} from "lucide-react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const location = useLocation();
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
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute top-12 right-10 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative flex min-h-screen">
        <aside className="hidden w-72 shrink-0 flex-col border-r border-white/10 bg-slate-950/95 px-5 py-8 lg:flex">
          <div className="mb-8 px-1">
            <div className="mb-4 inline-flex items-center gap-2 rounded-3xl bg-indigo-500/15 px-4 py-2 text-sm font-semibold text-indigo-200">
              <span className="h-2 w-2 rounded-full bg-indigo-400" />
              Career AI Suite
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white">Placement AI</h1>
            <p className="mt-3 text-sm leading-6 text-slate-400">A next-gen workspace for resumes, interviews, and career growth.</p>
          </div>

          <nav className="space-y-2">
            {menu.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-3 rounded-3xl px-4 py-3 text-sm font-medium transition ${
                    location.pathname === item.path
                      ? "bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-lg"
                      : "text-slate-300 hover:bg-slate-900/80 hover:text-white"
                  }`}
                >
                  <Icon size={18} />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </aside>

        <main className="flex-1 overflow-y-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1600px]">
            <Navbar user={user} onLogout={logout} />
            <div className="mt-8">{children}</div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
