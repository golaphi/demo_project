const mongoose = require("mongoose");

const connectDb = (url) => {
  return mongoose.connect(url).then(() => {
    console.log(" The App is connected to the database");
  });
};

module.exports = connectDb;
