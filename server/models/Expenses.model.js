const mongoose = require("mongoose");



const ExpensesSchema = new mongoose.Schema({
  projectname: { type: String },
  expensee: { type: String},
  notes: { type: String },
  file: { type: String },
  amount: { type: Number},
  date: { type: String},
});




const ExpensesModel = mongoose.model("Expenses", ExpensesSchema);

module.exports = ExpensesModel;
