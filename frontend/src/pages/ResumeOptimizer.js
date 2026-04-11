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

  const handleResume = (text) => {
    setResumeText(text);
  };

  const optimize = async () => {

    try {

      setLoading(true);

      const res = await API.post("/optimize", {
        resumeText,
        jobDescription: jobDesc
      });

      setResult(res.data.result);

      setLoading(false);

    } catch (error) {
      console.log(error);
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
    <div>

      <h2 className="text-2xl font-bold mb-4">
        Resume Optimizer
      </h2>

      {/* Resume Upload */}
      <ResumeUploader onResult={handleResume} />

      {/* Job Description */}
      <textarea
        placeholder="Paste Job Description..."
        value={jobDesc}
        onChange={(e) => setJobDesc(e.target.value)}
        className="border p-2 w-full mt-3 rounded"
        rows="6"
      />

      <button
        onClick={optimize}
        className="bg-blue-500 text-white px-4 py-2 mt-3 rounded"
      >
        Optimize Resume
      </button>

      {loading && (
        <div className="mt-4">
          Optimizing Resume...
        </div>
      )}

      {result && (
        <div
          id="resume-result"
          className="mt-6 bg-white p-4 shadow rounded"
        >

          <h3 className="text-xl font-bold mb-2">
            Resume Optimization Result
          </h3>

          <pre className="whitespace-pre-wrap">
            {result}
          </pre>

        </div>
      )}

      {result && (
        <button
          onClick={downloadPDF}
          className="bg-green-500 text-white px-4 py-2 mt-3 rounded"
        >
          Download Report
        </button>
      )}

    </div>
  );
};

export default ResumeOptimizer;