import React, { useState } from "react";
import API from "../api/api";

const ResumeUploader = ({ onResult }) => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const uploadResume = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append("resume", file);

    try {
      setLoading(true);
      const res = await API.post("/resume/upload", formData);
      onResult(res.data.analysis);
    } catch (error) {
      console.error(error);
      alert("Failed to upload resume");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-8 shadow-2xl">
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-500 to-violet-500 text-white shadow-lg">
          <span className="text-2xl font-bold">CV</span>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white">Upload your resume</h2>
          <p className="mt-2 text-sm text-slate-400">Drag and drop or browse your file to start the AI scan.</p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-[1fr_auto]">
        <label className="group relative flex cursor-pointer items-center justify-center rounded-[1.8rem] border border-dashed border-slate-700 bg-slate-900/85 px-5 py-6 text-center text-slate-300 transition hover:border-indigo-500/50 hover:bg-slate-900">
          <input
            type="file"
            className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <div className="space-y-2">
            <p className="text-sm font-semibold text-white">Choose a file</p>
            <p className="text-xs text-slate-500">PDF, DOCX, TXT supported</p>
            {file && <p className="text-xs text-slate-400">Selected: {file.name}</p>}
          </div>
        </label>

        <button
          type="button"
          onClick={uploadResume}
          disabled={!file || loading}
          className="inline-flex h-full items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-8 py-4 text-sm font-semibold text-white shadow-2xl shadow-indigo-500/20 transition hover:shadow-indigo-500/40 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Uploading..." : "Upload Resume"}
        </button>
      </div>

      <p className="mt-4 text-center text-sm text-slate-500">The AI will analyze your resume and return feedback in seconds.</p>
    </div>
  );
};

export default ResumeUploader;
