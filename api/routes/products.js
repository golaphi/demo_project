const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Product = require("../models/product");

router.get("/", (req, res, next) => {
  Product.find()
    .select(" name price _id")
    .exec()
    .then((results) => {
      const products = {
        count: results.length,
        data: results.map((doc) => {
          return {
            name: doc.name,
            price: doc.price,
            _id: doc._id,
            request: {
              type: "GET",
              url: "localhost:3000/products/" + doc._id,
            },
          };
        }),
      };
      res.status(200).json(products);
    })
    .catch((err) => {
      res.status(500).json(err.message);
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

router.post("/", async (req, res, next) => {
  const product = new Product({
    _id: mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price,
  });
  // const product = await Product.create(req.body)
  product
    .save()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err.message);
    });
});
router.get("/:productId", (req, res, next) => {
  const id = req.params.productId;
  Product.findById(id)
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err.message);
    });
});
router.patch("/:productId", (req, res, next) => {
  const id = req.params.productId;
  Product.updateOne({ _id: id }, { $set: { name: req.body.name } })
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err.message);
    });
});
router.delete("/:productId", (req, res, next) => {
  const id = req.params.productId;
  Product.remove({ _id: id })
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err.message);
    });
});

module.exports = router;
