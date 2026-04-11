const express = require("express");
const router = express.Router();
const generateInterviewQuestions = require("../ai/interviewAI");

router.post("/generate", async (req, res) => {
  try {

    const { text } = req.body;

    const questions = await generateInterviewQuestions(text);

    res.json({
      questions
    });

  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;