import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {

  const navigate = useNavigate();

  const cards = [
    {
      title: "Resume Analyzer 🔎",
      desc: "Analyze resume and get ATS score",
      path: "/upload"
    },
    {
      title: "Resume Optimizer 🔄️",
      desc: "Optimize resume based on job description",
      path: "/optimizer"
    },
    {
      title: "Mock Interview 🧑‍💼",
      desc: "Generate AI interview questions",
      path: "/interview"
    },
    {
      title: "Answer Evaluation 📊",
      desc: "Evaluate interview answers",
      path: "/evaluate"
    },
    {
      title: "Job Recommendations 💼",
      desc: "Get AI job suggestions",
      path: "/jobs"
    },
    {
      title: "AI Career Chat 🤖",
      desc: "Chat with AI career assistant",
      path: "/chat"
    },
    {
      title: "History 📜",
      desc: "View past resume analysis",
      path: "/history"
    }
  ];

  return (
    <div>

      <h1 className="text-3xl font-bold mb-6">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {cards.map((card, index) => (

          <div
            key={index}
            onClick={() => navigate(card.path)}
            className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition cursor-pointer"
          >

            <h3 className="text-lg font-semibold mb-2">
              {card.title}
            </h3>

            <p className="text-gray-500">
              {card.desc}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Dashboard;