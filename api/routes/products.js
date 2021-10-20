const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling the get Response from projduct",
  });
});

router.get("/:name/:age", (req, res, next) => {
  console.log(req.params);
  console.log(req.query);
  res.status(200).json({
    name: req.params.name,
    queryone: req.query.one,
  });
});

router.post("/", (req, res, next) => {
  const product = {
    productId: req.body.productId,
    quantity: req.body.quantity,
  };
  res.status(200).json({
    message: "Handling the Post Response from projduct",
    product: product,
  });
});
router.get("/:productId", (req, res, next) => {
  const productId = req.params.productId;

  if (productId == "special") {
    res.status(200).json({
      message: "You discovered the special product Id",
      id: productId,
    });
  } else {
    res.status(200).json({
      message: "You passed some special prodcust Id",
      id: productId,
    });
  }
});
router.put("/:productId", (req, res, next) => {
  const productId = req.params.productId;

  return res.status(200).json({
    message: "Handling Put request",
    id: productId,
  });
});
router.delete("/:productId", (req, res, next) => {
  const productId = req.params.productId;

  return res.status(200).json({
    message: "Handling Delete request",
    id: productId,
  });
});

module.exports = router;
