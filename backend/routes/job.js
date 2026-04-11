const express = require("express");
const router = express.Router();

const recommendJobs = require("../ai/jobAI");

router.post("/", async (req, res) => {

  try {

    const { text } = req.body;

    const result = await recommendJobs(text);

    res.json({
      jobs: result
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      error: "Something went wrong"
    });

  }

});

module.exports = router;