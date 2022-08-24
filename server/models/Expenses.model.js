
const mongoose = require("mongoose");

const expensesSchema= new mongoose.Schema({
  projectname:{type:String,requried:true},
  expensee:{type:String,requried:true},
  notes:String,
  file:String,
  amount:{type:Number,requried:true},
  date : {type:Number,requried:true}

})

const ExpensesModel=mongoose.model("Expenses",expensesSchema)

module.exports=ExpensesModel