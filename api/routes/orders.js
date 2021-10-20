const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling the get Response from Orders",
  });
});
router.post("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling the Post Response from Orders",
  });
});
router.get("/:orderId", (req, res, next) => {
  const orderId = req.params.orderId;

  if (orderId == "special") {
    res.status(200).json({
      message: "You discovered the special Orders Id",
      id: orderId,
    });
  } else {
    res.status(200).json({
      message: "You passed some special Orders Id",
      id: orderId,
    });
  }
});
router.put("/:orderId", (req, res, next) => {
  const orderId = req.params.orderId;

  return res.status(200).json({
    message: "Handling Put request from Orders",
    id: orderId,
  });
});
router.delete("/:orderId", (req, res, next) => {
  const orderId = req.params.orderId;

  return res.status(200).json({
    message: "Handling Delete request from Orders",
    id: orderId,
  });
});

module.exports = router;
