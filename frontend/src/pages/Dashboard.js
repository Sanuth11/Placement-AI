import React from "react";
import { useNavigate } from "react-router-dom";
import { TrendingUp, ShieldCheck, Rocket, Star, Sparkles, History } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();

  const cards = [
    { title: "Resume Analyzer", desc: "Analyze your resume and get an ATS-ready score instantly.", path: "/upload", accent: "from-indigo-500 to-violet-500", icon: TrendingUp },
    { title: "Resume Optimizer", desc: "Fine-tune your resume for the exact role you want.", path: "/optimizer", accent: "from-emerald-500 to-teal-400", icon: ShieldCheck },
    { title: "Mock Interview", desc: "Practice high-impact interview questions with AI.", path: "/interview", accent: "from-fuchsia-500 to-pink-500", icon: Rocket },
    { title: "Answer Evaluation", desc: "Get expert AI feedback to sharpen your responses.", path: "/evaluate", accent: "from-sky-500 to-cyan-500", icon: Star },
    { title: "Job Recommendations", desc: "Discover roles tailored to your experience and goals.", path: "/jobs", accent: "from-amber-500 to-orange-500", icon: TrendingUp },
    { title: "AI Career Chat", desc: "Ask career questions and get instant guidance.", path: "/chat", accent: "from-violet-500 to-indigo-500", icon: Sparkles },
    { title: "History", desc: "Review your past resume insights and improvements.", path: "/history", accent: "from-slate-500 to-slate-400", icon: History }
  ];

  const stats = [
    { value: "94%", label: "Resume strength" },
    { value: "12x", label: "Faster applications" },
    { value: "90%", label: "Interview questions generated" }
  ];

  return (
    <div className="space-y-8">
      <section className="glass-card rounded-[2rem] border-white/10 p-8 shadow-2xl">
        <div className="grid gap-6 xl:grid-cols-[1.6fr_1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-indigo-300">Career hub</p>
            <h1 className="mt-4 text-4xl font-semibold text-white">A beautifully simple platform for real job wins.</h1>
            <p className="mt-4 text-slate-300">Use AI-powered tools, visual progress, and career insights to build a better application, faster.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {stats.map((item) => (
                <div key={item.label} className="rounded-3xl border border-white/10 bg-slate-900/80 p-5 shadow-lg">
                  <p className="text-3xl font-semibold text-white">{item.value}</p>
                  <p className="mt-2 text-sm text-slate-400">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-950/95 p-8 shadow-2xl">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Fast access</p>
                <h2 className="mt-3 text-3xl font-semibold text-white">Launch the right action.</h2>
              </div>
              <div className="rounded-3xl bg-indigo-500/15 px-4 py-3 text-indigo-200">Live</div>
            </div>
            <div className="mt-8 space-y-4">
              <div className="rounded-3xl bg-slate-950/90 p-5 text-slate-200 shadow-inner">
                <p className="text-sm text-slate-400">Resume quality</p>
                <div className="mt-3 h-3 rounded-full bg-slate-800">
                  <div className="h-3 w-4/5 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500" />
                </div>
              </div>
              <div className="rounded-3xl bg-slate-950/90 p-5 text-slate-200 shadow-inner">
                <p className="text-sm text-slate-400">Application readiness</p>
                <div className="mt-3 h-3 rounded-full bg-slate-800">
                  <div className="h-3 w-3/4 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500" />
                </div>
              </div>
              <div className="rounded-3xl bg-slate-950/90 p-5 text-slate-200 shadow-inner">
                <p className="text-sm text-slate-400">Interview confidence</p>
                <div className="mt-3 h-3 rounded-full bg-slate-800">
                  <div className="h-3 w-3/5 rounded-full bg-gradient-to-r from-fuchsia-500 to-pink-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <button
                key={index}
                onClick={() => navigate(card.path)}
                className="group overflow-hidden rounded-[1.8rem] border border-white/10 bg-slate-900/90 p-7 text-left shadow-2xl transition duration-300 hover:-translate-y-1 hover:border-indigo-500/40 hover:bg-slate-900"
              >
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br ${card.accent} text-white shadow-lg`}>
                  <Icon size={20} />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{card.title}</h3>
                <p className="mt-3 text-slate-400">{card.desc}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-indigo-300 transition group-hover:text-indigo-200">Start <span aria-hidden>→</span></span>
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
