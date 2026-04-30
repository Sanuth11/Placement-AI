require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const corsOptions = require("./config/corsConfig");

// routes
const authRoutes = require("./routes/auth");
const resumeRoutes = require("./routes/resume");
const interviewRoutes = require("./routes/interview");
const evaluateRoutes = require("./routes/evaluate");
const chatRoutes = require("./routes/chat");
const jobRoutes = require("./routes/job");
const optimizeRoutes = require("./routes/optimize");
const historyRoutes = require("./routes/history");

const app = express();


// ✅ APPLY CORS (FIRST)
app.use(cors(corsOptions));


// ✅ HANDLE PREFLIGHT (NO CRASH VERSION)
app.use((req, res, next) => {
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Origin", req.headers.origin || "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    return res.sendStatus(200);
  }
  next();
});


// ✅ BODY PARSER
app.use(express.json());


// ✅ ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/resume", resumeRoutes);
app.use("/api/interview", interviewRoutes);
app.use("/api/evaluate", evaluateRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/job", jobRoutes);
app.use("/api/optimize", optimizeRoutes);
app.use("/api/history", historyRoutes);


// ✅ TEST ROUTE
app.get("/", (req, res) => {
  res.send("API running");
});


// ✅ DB CONNECTION
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ DB Error:", err.message));


// ✅ PORT (IMPORTANT FOR RENDER)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});