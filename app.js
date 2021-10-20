const express = require("express");
const morgan = require("morgan");
var bodyParser = require("body-parser");
const app = express();
const indexRoute = require("./index");
const productRoute = require("./api/routes/products");
const orderRoutes = require("./api/routes/orders");

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Request-Headers",
    "Origin, X-Requested-With,Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header(
      "Access-Control-Allow-Methods",
      "PUT, POST, GET , PATCH, DELETE"
    );
    return res.status(200).json({});
  }
  next();
});

app.use("/", indexRoute);
app.use("/products", productRoute);
app.use("/orders", orderRoutes);

app.use((res, req, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    error: {
      message: error.message,
    },
  });
});
module.exports = app;
