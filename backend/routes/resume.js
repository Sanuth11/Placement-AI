const express = require("express");
const router = express.Router();

const multer = require("multer");
const fs = require("fs");
const pdf = require("pdf-parse");

const Resume = require("../models/Resume");
const auth = require("../middleware/auth");

const { analyzeResume } = require("../ai/resumeAI");

const upload = multer({
  dest: "uploads/"
});

router.post("/upload", auth, upload.single("resume"), async (req, res) => {

  try {

    const dataBuffer = fs.readFileSync(req.file.path);

    const data = await pdf(dataBuffer);

    const resumeText = data.text;

    const analysis = await analyzeResume(resumeText);

    const resume = new Resume({

      userId: req.user.id,
      resumeText,
      analysis

    });

    await resume.save();

    res.json({
      analysis
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });

  }

});

module.exports = router;