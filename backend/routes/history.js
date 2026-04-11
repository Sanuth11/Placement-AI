const express = require("express");
const router = express.Router();

const Resume = require("../models/Resume");
const auth = require("../middleware/auth");

router.get("/", auth, async (req, res) => {

  try {

    const history = await Resume.find({
      userId: req.user.id
    }).sort({ createdAt: -1 });

    res.json(history);

  } catch (error) {

    res.status(500).json({
      message: "Server Error"
    });

  }

});

module.exports = router;