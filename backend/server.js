require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const corsOptions = require("./config/corsConfig");

const authRoutes = require("./routes/auth");
const resumeRoutes = require("./routes/resume");
const interviewRoutes = require("./routes/interview");
const evaluateRoutes = require("./routes/evaluate");
const chatRoutes = require("./routes/chat");
const jobRoutes = require("./routes/job");
const optimizeRoutes = require("./routes/optimize");
const historyRoutes = require("./routes/history");

const app = express();

app.use(cors(corsOptions));
app.options(/^\/api\/.*$/, cors(corsOptions));

app.use((req, res, next) => {
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});

app.use(express.json());


// routes
app.use("/api/auth", authRoutes);
app.use("/api/resume", resumeRoutes);
app.use("/api/interview", interviewRoutes);
app.use("/api/evaluate", evaluateRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/job", jobRoutes);
app.use("/api/optimize", optimizeRoutes);
app.use("/api/history", historyRoutes);


// test route
app.get("/", (req, res) => {
  res.send("API running");
});


// DB
const mongoUri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/placement-ai";

mongoose.connect(mongoUri)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));


// PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});