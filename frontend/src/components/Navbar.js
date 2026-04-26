import React from "react";
import { Sparkles, UserCircle } from "lucide-react";

const Navbar = ({ user, onLogout }) => {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-500 to-violet-500 text-white shadow-lg shadow-indigo-500/30">
          <Sparkles size={24} />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Placement AI</p>
          <h2 className="text-lxl uppercase font-semibold text-white">Career Assistant</h2>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button onClick={onLogout} className="inline-flex items-center gap-2 rounded-full bg-indigo-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400">
          <UserCircle size={16} />
          {user?.name || "User"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
