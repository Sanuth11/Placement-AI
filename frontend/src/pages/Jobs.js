import React, { useState } from "react";
import API from "../api/api";
import ResumeUploader from "../components/ResumeUploader";

const Jobs = () => {

  const [jobs, setJobs] = useState("");
  const [loading, setLoading] = useState(false);

  const getJobs = async (resumeText) => {

    try {

      setLoading(true);

      const res = await API.post("/job", {
        text: resumeText
      });

      setJobs(res.data.jobs);

      setLoading(false);

    } catch (error) {
      console.log(error);
      setLoading(false);
    }

  };

  return (
    <div>

      <h2 className="text-2xl font-bold mb-4">
        Job Recommendations
      </h2>

      <ResumeUploader onResult={getJobs} />

      {loading && (
        <div className="mt-4">
          Generating Job Recommendations...
        </div>
      )}

      {jobs && (
        <div className="mt-6 bg-white p-4 shadow rounded">

          <h3 className="text-xl font-bold mb-2">
            Suggested Jobs
          </h3>

          <pre className="whitespace-pre-wrap">
            {jobs}
          </pre>

        </div>
      )}

    </div>
  );
};

export default Jobs;