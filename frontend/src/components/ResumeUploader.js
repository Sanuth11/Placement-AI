import React, { useState } from "react";
import API from "../api/api";

const ResumeUploader = ({ onResult }) => {

  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const uploadResume = async () => {

    const formData = new FormData();
    formData.append("resume", file);

    setLoading(true);

    const res = await API.post("/resume/upload", formData);

    onResult(res.data.analysis);

    setLoading(false);
  };

  return (
    <div className="mb-4">

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button
        onClick={uploadResume}
        className="ml-2 bg-blue-500 text-white px-3 py-1 rounded"
      >
        Upload Resume
      </button>

      {loading && (
        <div className="mt-2 text-gray-500">
          Analyzing Resume...
        </div>
      )}

    </div>
  );
};

export default ResumeUploader;