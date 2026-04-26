import React, { useEffect, useState } from "react";
import API from "../api/api";

const History = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    const res = await API.get("/history");
    setHistory(res.data);
  };

  return (
    <div className="space-y-8">
      <section className="glass-card rounded-[2rem] border-white/10 p-8 shadow-2xl">
        <p className="text-sm uppercase tracking-[0.28em] text-indigo-300">Resume history</p>
        <h1 className="mt-4 text-4xl font-semibold text-white">Track every insight and growth moment.</h1>
        <p className="mt-4 text-slate-300">Your previous resume reviews are saved here so you can iterate smarter.</p>
      </section>

      <section className="space-y-4">
        {history.length === 0 ? (
          <div className="glass-card rounded-[2rem] border-white/10 p-8 text-slate-300 shadow-2xl">No history yet. Upload a resume to begin your record of improvements.</div>
        ) : (
          history.map((item, index) => (
            <div key={index} className="glass-card rounded-[1.8rem] border border-white/10 p-6 shadow-xl">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-sm text-slate-400">{new Date(item.createdAt).toLocaleString()}</span>
                <span className="rounded-full bg-indigo-500/15 px-3 py-1 text-sm text-indigo-200">Saved report</span>
              </div>
              <div className="mt-5 whitespace-pre-wrap rounded-[1.8rem] border border-slate-800 bg-slate-950/90 p-5 text-slate-200 shadow-inner">
                {item.analysis}
              </div>
            </div>
          ))
        )}
      </section>
    </div>
  );
};

export default History;
