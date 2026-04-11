import React, { useState } from "react";
import API from "../api/api";

const Evaluate = () => {

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState("");

  const handleEvaluate = async () => {

    const res = await API.post("/evaluate", {
      question,
      answer
    });

    setResult(res.data.result);
  };

  return (
    <div className="max-w-3xl mx-auto">

      <h1 className="text-2xl font-bold mb-6">
        Answer Evaluation
      </h1>

      <div className="bg-white p-6 rounded-xl shadow space-y-4">

        <input
          placeholder="Enter Interview Question"
          className="w-full border p-3 rounded-lg"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        <textarea
          placeholder="Enter your answer"
          className="w-full border p-3 rounded-lg h-40"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />

        <button
          onClick={handleEvaluate}
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700"
        >
          Evaluate Answer
        </button>

      </div>

      {result && (

        <div className="bg-white p-6 rounded-xl shadow mt-6">

          <h2 className="font-semibold mb-3">
            AI Feedback
          </h2>

          <pre className="whitespace-pre-wrap">
            {result}
          </pre>

        </div>

      )}

    </div>
  );
};

export default Evaluate;