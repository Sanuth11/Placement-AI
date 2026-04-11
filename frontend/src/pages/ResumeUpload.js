import React, { useState } from "react";
import API from "../api/api";
import { UploadCloud } from "lucide-react";

const Upload = () => {

  const [file, setFile] = useState(null);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {

    const formData = new FormData();
    formData.append("resume", file);

    setLoading(true);

    const res = await API.post("/resume/upload", formData);

    setResult(res.data.analysis);

    setLoading(false);

  };

  return (
    <div>

      <h1 className="text-3xl font-bold mb-6">
        Resume Analyzer
      </h1>

      <div className="bg-white p-8 rounded-2xl shadow-lg">

        <div className="border-2 border-dashed border-gray-300 rounded-xl p-10 text-center">

          <UploadCloud className="mx-auto mb-4" size={40} />

          <p className="text-gray-600 mb-4">
            Upload your resume to analyze
          </p>

          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            className="mb-4"
          />

          <br />

          <button
            onClick={handleUpload}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
          >

            {loading ? "Analyzing..." : "Upload Resume"}

          </button>

        </div>

      </div>

      {result && (

        <div className="mt-6 bg-white p-6 rounded-xl shadow">

          <h2 className="text-xl font-semibold mb-4">
            Analysis Result
          </h2>

          <pre className="whitespace-pre-wrap">
            {result}
          </pre>

        </div>

      )}

    </div>
  );
};

export default Upload;