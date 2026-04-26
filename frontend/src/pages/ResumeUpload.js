import React, { useState } from "react";
import { UploadCloud } from "lucide-react";
import API from "../api/api";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) return;
    setLoading(true);
    const formData = new FormData();
    formData.append("resume", file);
    const res = await API.post("/resume/upload", formData);
    setResult(res.data.analysis);
    setLoading(false);
  };

  return (
    <div className="space-y-8">
      <section className="glass-card rounded-[2rem] border-white/10 p-8 shadow-2xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-indigo-300">Resume analyzer</p>
            <h1 className="mt-4 text-4xl font-semibold text-white">Upload your resume for an instant AI audit.</h1>
            <p className="mt-4 text-slate-300">Receive practical feedback, ATS score, and improvements in a polished format.</p>
          </div>
          <div className="rounded-3xl bg-slate-900/80 p-5 text-slate-300 border border-white/10 shadow-lg">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Fast result</p>
            <p className="mt-3 text-2xl font-semibold text-white">Smart insights</p>
          </div>
        </div>

        <div className="mt-8 rounded-[2rem] border border-dashed border-slate-700 bg-slate-950/80 p-8 text-center">
          <UploadCloud className="mx-auto text-indigo-400" size={48} />
          <p className="mt-4 text-slate-300">Select a resume file to analyze. Supported formats: PDF, DOCX, TXT.</p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              className="w-full rounded-3xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-slate-100 outline-none transition file:mr-4 file:rounded-full file:border-0 file:bg-indigo-500 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white"
            />
            <button
              onClick={handleUpload}
              disabled={!file || loading}
              className="rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-3 text-white shadow-2xl shadow-indigo-500/20 transition hover:shadow-indigo-500/40 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? "Analyzing..." : "Analyze Resume"}
            </button>
          </div>
        </div>
      </section>

      {result && (
        <section className="glass-card rounded-[2rem] border-white/10 p-6 shadow-2xl">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-white">Analysis result</h2>
              <p className="mt-2 text-slate-400">Your resume score, feedback, and growth areas are below.</p>
            </div>
          </div>
          <div className="mt-6 whitespace-pre-wrap rounded-[1.8rem] border border-slate-800 bg-slate-950/90 p-6 text-slate-200 shadow-inner">
            {result}
          </div>
        </section>
      )}
    </div>
  );
};

export default Upload;
