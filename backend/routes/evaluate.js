const express = require("express");
const router = express.Router();
const evaluateAnswer = require("../ai/evaluateAI");

router.post("/", async (req, res) => {
  try {
    const { question, answer } = req.body;

    const evaluation = await evaluateAnswer(question, answer);

    res.json({
      result: evaluation,
      evaluation
    });

  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;