import React, { useState } from "react";
import API from "../api/api";
import ResumeUploader from "../components/ResumeUploader";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const ResumeOptimizer = () => {
  const [resumeText, setResumeText] = useState("");
  const [jobDesc, setJobDesc] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleResume = (text) => setResumeText(text);

  const optimize = async () => {
    try {
      setLoading(true);
      const res = await API.post("/optimize", { resumeText, jobDescription: jobDesc });
      setResult(res.data.result);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const downloadPDF = () => {
    const input = document.getElementById("resume-result");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 10, 10, 180, 160);
      pdf.save("Resume_Optimization_Report.pdf");
    });
  };

  return (
    <div className="space-y-8">
      <section className="glass-card rounded-[2rem] border-white/10 p-8 shadow-2xl">
        <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-indigo-300">Resume optimizer</p>
            <h1 className="mt-4 text-4xl font-semibold text-white">Make your resume unstoppable for the role you want.</h1>
            <p className="mt-4 text-slate-300">Upload your resume, add the job description, and let AI rewrite the strongest version.</p>
          </div>
          <div className="rounded-3xl bg-slate-900/80 p-5 text-slate-300 border border-white/10 shadow-lg">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Optimize</p>
            <p className="mt-3 text-2xl font-semibold text-white">Role-ready copy</p>
          </div>
        </div>

        <ResumeUploader onResult={handleResume} />

        <div className="mt-6 space-y-4">
          <label className="block text-sm font-medium text-slate-300">Job description</label>
          <textarea
            placeholder="Paste job description here..."
            value={jobDesc}
            onChange={(e) => setJobDesc(e.target.value)}
            rows="8"
            className="w-full rounded-[1.8rem] border border-slate-700 bg-slate-950/90 px-5 py-4 text-slate-100 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
          />
          <button
            onClick={optimize}
            disabled={loading || !resumeText || !jobDesc}
            className="rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-3 text-white shadow-2xl shadow-emerald-500/20 transition hover:shadow-emerald-500/40 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Optimizing..." : "Optimize Resume"}
          </button>
        </div>
      </section>

      {result && (
        <section id="resume-result" className="glass-card rounded-[2rem] border-white/10 p-6 shadow-2xl">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-white">Optimization result</h2>
              <p className="mt-2 text-slate-400">Download the report or copy AI suggestions directly.</p>
            </div>
            <button
              onClick={downloadPDF}
              className="rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-3 text-white shadow-2xl shadow-indigo-500/20 transition hover:shadow-indigo-500/40"
            >
              Download report
            </button>
          </div>
          <div className="mt-6 whitespace-pre-wrap rounded-[1.8rem] border border-slate-800 bg-slate-950/90 p-6 text-slate-200 shadow-inner">
            {result}
          </div>
        </section>
      )}
    </div>
  );
};

export default ResumeOptimizer;
