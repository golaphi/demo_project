const connectDb = require("./mongo_db/db/connect");
const express = require("express");
require("dotenv").config();
const app = express();
const tasksRoute = require("./mongo_db/routes/tasks");
const notFound = require("./mongo_db/middleware/notFound");
const errorHandlerMiddleware = require("./mongo_db/middleware/errorHandlerMiddleware");

app.use(express.json());

const port = process.env.port || 5000;
app.use("/api/v1/tasks", tasksRoute);
app.use(notFound);
app.use(errorHandlerMiddleware);

const startConnection = async () => {
  try {
    await connectDb(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(" The server is listening at port ", port);
    });
  } catch (err) {
    console.log(err);
  }
};

startConnection();
