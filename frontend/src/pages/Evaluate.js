import React, { useState } from "react";
import API from "../api/api";

const Evaluate = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEvaluate = async () => {
    setLoading(true);
    const res = await API.post("/evaluate", { question, answer });
    setResult(res.data.result);
    setLoading(false);
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <section className="glass-card rounded-[2rem] border-white/10 p-8 shadow-2xl">
        <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-indigo-300">Answer evaluation</p>
            <h1 className="mt-4 text-4xl font-semibold text-white">Refine every interview response to high-level quality.</h1>
            <p className="mt-4 text-slate-300">Submit a question and answer to get polished feedback from your AI coach.</p>
          </div>
          <div className="rounded-3xl bg-slate-900/80 p-5 text-slate-300 border border-white/10 shadow-lg">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Feedback</p>
            <p className="mt-3 text-2xl font-semibold text-white">Clear guidance</p>
          </div>
        </div>

        <div className="mt-8 space-y-5">
          <textarea
            placeholder="Enter interview question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            rows="3"
            className="w-full rounded-[1.8rem] border border-slate-700 bg-slate-950/90 px-5 py-4 text-slate-100 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
          />
          <textarea
            placeholder="Enter your answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            rows="8"
            className="w-full rounded-[1.8rem] border border-slate-700 bg-slate-950/90 px-5 py-4 text-slate-100 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
          />
          <button
            onClick={handleEvaluate}
            disabled={loading || !question || !answer}
            className="rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-8 py-3 text-white shadow-2xl shadow-indigo-500/20 transition hover:shadow-indigo-500/40 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Evaluating..." : "Evaluate Answer"}
          </button>
        </div>
      </section>

      {result && (
        <section className="glass-card rounded-[2rem] border-white/10 p-6 shadow-2xl">
          <h2 className="text-2xl font-semibold text-white">AI feedback</h2>
          <div className="mt-6 whitespace-pre-wrap rounded-[1.8rem] border border-slate-800 bg-slate-950/90 p-6 text-slate-200 shadow-inner">
            {result}
          </div>
        </section>
      )}
    </div>
  );
};

export default Evaluate;
