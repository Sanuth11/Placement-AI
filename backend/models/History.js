const mongoose = require("mongoose");

const HistorySchema = new mongoose.Schema({
  resumeText: String,
  jobDescription: String,
  result: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("History", HistorySchema);