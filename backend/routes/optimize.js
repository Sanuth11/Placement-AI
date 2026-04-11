const express = require("express");
const router = express.Router();

const optimizeResume = require("../ai/resumeOptimizeAI");
const History = require("../models/History");

router.post("/", async (req, res) => {

  try {

    const { resumeText, jobDescription } = req.body;

    const result = await optimizeResume(resumeText, jobDescription);

    const history = new History({
      resumeText,
      jobDescription,
      result
    });

    await history.save();

    res.json({ result });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      error: "Server error"
    });

  }

});

router.get("/history", async (req, res) => {

  const history = await History.find().sort({ createdAt: -1 });

  res.json(history);

});

module.exports = router;