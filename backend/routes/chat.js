const express = require("express");
const router = express.Router();
const careerChat = require("../ai/chatAI");

router.post("/", async (req, res) => {
  try {

    const { message } = req.body;

    const reply = await careerChat(message);

    res.json({
      reply
    });

  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;