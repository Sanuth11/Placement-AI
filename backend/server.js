require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// Routes
const authRoutes = require("./routes/auth");
const resumeRoutes = require("./routes/resume");
const interviewRoutes = require("./routes/interview");
const evaluateRoutes = require("./routes/evaluate");
const chatRoutes = require("./routes/chat");
const jobRoutes = require("./routes/job");
const optimizeRoutes = require("./routes/optimize");
const historyRoutes = require("./routes/history");

const app = express();


// ✅ CORS FIX (VERY IMPORTANT)
app.use(cors({
  origin: [
    "http://localhost:3000",
    "https://placement-ai-7hl1.onrender.com"
  ],
  credentials: true
}));

// ✅ Middleware
app.use(express.json());


// ✅ Routes
app.use("/api/auth", authRoutes);
app.use("/api/resume", resumeRoutes);
app.use("/api/interview", interviewRoutes);
app.use("/api/evaluate", evaluateRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/job", jobRoutes);
app.use("/api/optimize", optimizeRoutes);
app.use("/api/history", historyRoutes);


// ✅ Root route (for testing)
app.get("/", (req, res) => {
  res.send("🚀 Placement AI Backend Running");
});


// ✅ MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
  })
  .catch((err) => {
    console.error("❌ MongoDB Error:", err.message);
  });


// ✅ PORT FIX (Render compatible)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🔥 Server running on port ${PORT}`);
});