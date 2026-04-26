import React, { useState } from "react";
import API from "../api/api";
import ResumeUploader from "../components/ResumeUploader";

const Interview = () => {
  const [questions, setQuestions] = useState("");
  const [loading, setLoading] = useState(false);

  const generateQuestions = async (resumeText) => {
    try {
      setLoading(true);
      const res = await API.post("/interview/generate", { text: resumeText });
      setQuestions(res.data.questions);
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
            <p className="text-sm uppercase tracking-[0.28em] text-indigo-300">Mock interview</p>
            <h1 className="mt-4 text-4xl font-semibold text-white">Get tailored interview questions from AI.</h1>
            <p className="mt-4 text-slate-300">Upload your resume and start practicing with the most relevant prompts for your profile.</p>
          </div>
          <div className="rounded-3xl bg-slate-900/80 p-5 text-slate-300 border border-white/10 shadow-lg">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Practice</p>
            <p className="mt-3 text-2xl font-semibold text-white">Confidence boost</p>
          </div>
        </div>

        <ResumeUploader onResult={generateQuestions} />

        {loading && (
          <div className="rounded-[1.8rem] border border-slate-700 bg-slate-950/90 p-5 text-slate-300 shadow-inner">Generating questions...</div>
        )}
      </section>

      {questions && (
        <section className="glass-card rounded-[2rem] border-white/10 p-6 shadow-2xl">
          <h2 className="text-2xl font-semibold text-white">Interview questions</h2>
          <div className="mt-6 whitespace-pre-wrap rounded-[1.8rem] border border-slate-800 bg-slate-950/90 p-6 text-slate-200 shadow-inner">
            {questions}
          </div>
        </section>
      )}
    </div>
  );
};

export default Interview;
