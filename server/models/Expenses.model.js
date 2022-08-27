const mongoose = require("mongoose");



const ExpensesSchema = new mongoose.Schema({
  projectname: { type: String, requried: true },
  expensee: { type: String, requried: true },
  notes: { type: String },
  file: { type: String },
  amount: { type: Number, requried: true },
  date: { type: String},
});




const ExpensesModel = mongoose.model("Expenses", ExpensesSchema);

module.exports = ExpensesModel;
