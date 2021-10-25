const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name Cannor be Empty"],
    trim: true,
    maxLength: [20, " Name cannot be more than 20 characters"],
  },
  completed: {
    type: Number,
    default: false,
  },
});

module.exports = mongoose.model("Task", TaskSchema);
