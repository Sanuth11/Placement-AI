import React, { useState } from "react";
import API from "../api/api";
import ResumeUploader from "../components/ResumeUploader";

const Interview = () => {

  const [questions, setQuestions] = useState("");
  const [loading, setLoading] = useState(false);

  const generateQuestions = async (resumeText) => {

    try {

      setLoading(true);

      const res = await API.post("/interview/generate", {
        text: resumeText
      });

      setQuestions(res.data.questions);

      setLoading(false);

    } catch (error) {
      console.log(error);
      setLoading(false);
    }

  };

  return (
    <div>

      <h2 className="text-2xl font-bold mb-4">
        AI Mock Interview
      </h2>

      {/* Resume Upload */}
      <ResumeUploader onResult={generateQuestions} />

      {loading && (
        <div className="mt-4">
          Generating Questions...
        </div>
      )}

      {/* Questions */}
      {questions && (
        <div className="mt-6 bg-white p-4 shadow rounded">

          <h3 className="text-xl font-bold mb-2">
            Interview Questions
          </h3>

          <pre className="whitespace-pre-wrap">
            {questions}
          </pre>

        </div>
      )}

    </div>
  );
};

export default Interview;