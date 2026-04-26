import React, { useState } from "react";
import API from "../api/api";
import ResumeUploader from "../components/ResumeUploader";

const Jobs = () => {
  const [jobs, setJobs] = useState("");
  const [loading, setLoading] = useState(false);

  const getJobs = async (resumeText) => {
    try {
      setLoading(true);
      const res = await API.post("/job", { text: resumeText });
      setJobs(res.data.jobs);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <section className="glass-card rounded-[2rem] border-white/10 p-8 shadow-2xl">
        <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-indigo-300">Job recommendations</p>
            <h1 className="mt-4 text-4xl font-semibold text-white">Find roles that fit your skills and ambition.</h1>
            <p className="mt-4 text-slate-300">Upload your resume to receive AI-curated job opportunities tailored to your profile.</p>
          </div>
          <div className="rounded-3xl bg-slate-900/80 p-5 text-slate-300 border border-white/10 shadow-lg">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Job AI</p>
            <p className="mt-3 text-2xl font-semibold text-white">Curated matches</p>
          </div>
        </div>

        <ResumeUploader onResult={getJobs} />

        {loading && (
          <div className="rounded-[1.8rem] border border-slate-700 bg-slate-950/90 p-5 text-slate-300 shadow-inner">Generating job recommendations...</div>
        )}
      </section>

      {jobs && (
        <section className="glass-card rounded-[2rem] border-white/10 p-6 shadow-2xl">
          <h2 className="text-2xl font-semibold text-white">Suggested jobs</h2>
          <div className="mt-6 whitespace-pre-wrap rounded-[1.8rem] border border-slate-800 bg-slate-950/90 p-6 text-slate-200 shadow-inner">
            {jobs}
          </div>
        </section>
      )}
    </div>
  );
};

export default Jobs;
