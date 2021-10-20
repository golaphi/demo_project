const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message:
      "Handling get from Index This is index page, so you will be rediredted to the home page",
  });
});
router.post("/", (req, res, next) => {
  res.status(200).json({
    message:
      "Handling Post Request, This is index page, so you will be rediredted to the home page",
  });
});

module.exports = router;
