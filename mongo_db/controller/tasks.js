const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  try {
    const task = await Task.find({});

    res.status(200).json({
      status: true,
      message: "fetched data successfully",

      data: {
        total: task.length,
        task,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);

    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findOne({ _id: taskId });

    if (!task) {
      return res.status(404).json({
        message: `No task with the :${ttaskIdaskid}`,
      });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const updateTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findByIdAndUpdate({ _id: taskId }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).json({
        message: `No task with the :${ttaskIdaskid}`,
      });
    }
    res.status(200).json({ id: taskId, data: task });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const deleteTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskId });

    if (!task) {
      return res.status(404).json({
        message: `No task with the :${taskIdaskid}`,
      });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
