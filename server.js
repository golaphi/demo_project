const http = require("http");
const app = require("./app");
require("dotenv").config();
const connectDb = require("./db/connect");

const port = process.env.port || 3000;

const server = http.createServer(app);

/* server.listen(port, () =>
  console.log(" Listening at the url Link-  localhost:3000")
);
 */

const startConnection = async () => {
  try {
    await connectDb(process.env.MONGO_URL);
    server.listen(port, () => {
      console.log(" The server is listening at port ", port);
    });
  } catch (err) {
    console.log(err);
  }
};

startConnection();
