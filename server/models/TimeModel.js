

const mongoose = require("mongoose");

const TimeSchema = new mongoose.Schema({
  task: String,
  time: Number,
  projectManagement: String,
  notes: String
});

module.exports = mongoose.model("timeData", TimeSchema);