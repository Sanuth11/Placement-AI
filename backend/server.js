require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const resumeRoutes = require("./routes/resume");
const interviewRoutes = require("./routes/interview");
const evaluateRoutes = require("./routes/evaluate");
const chatRoutes = require("./routes/chat");
const jobRoutes = require("./routes/job");
const optimizeRoutes = require("./routes/optimize");
const historyRoutes = require("./routes/history");




const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/resume", resumeRoutes);
app.use("/api/interview", interviewRoutes);
app.use("/api/evaluate", evaluateRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/job", jobRoutes);
app.use("/api/optimize", optimizeRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/history", historyRoutes);



mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("Mongo Error:", err));

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("AI Career Copilot API Running");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});