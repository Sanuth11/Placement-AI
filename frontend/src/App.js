import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/Layout";

import Dashboard from "./pages/Dashboard";
import ResumeUpload from "./pages/ResumeUpload";
import ResumeOptimizer from "./pages/ResumeOptimizer";
import Interview from "./pages/Interview";
import Evaluate from "./pages/Evaluate";
import Jobs from "./pages/Jobs";
import Chat from "./pages/Chat";
import History from "./pages/History";

import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => {

  const token = localStorage.getItem("token");

  return (
    <Router>

      <Routes>

        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route
          path="*"
          element={
            token ? (
              <Layout>
                <Routes>

                  <Route path="/" element={<Dashboard />} />
                  <Route path="/upload" element={<ResumeUpload />} />
                  <Route path="/optimizer" element={<ResumeOptimizer />} />
                  <Route path="/interview" element={<Interview />} />
                  <Route path="/evaluate" element={<Evaluate />} />
                  <Route path="/jobs" element={<Jobs />} />
                  <Route path="/chat" element={<Chat />} />
                  <Route path="/history" element={<History />} />

                </Routes>
              </Layout>
            ) : (
              <Navigate to="/login" />
            )
          }
        />

      </Routes>

    </Router>
  );
};

export default App;