const express = require("express");
const ExpensesModel = require("../models/Expenses.model");
const expensesRouter = express.Router();

expensesRouter.post("/", async (req, res) => {
  const { projectname, expensee, notes, file, amount, date, userId } = req.body;
  console.log(projectname, expensee, notes, file, amount, date, userId);

  const new_expenses = new ExpensesModel({
    projectname,
    expensee,
    notes,
    file,
    amount,
    date,
    userId,
  });
  await new_expenses.save();
  res.send({ message: "expenses created", new_expenses });
});
expensesRouter.get("/", async (req, res) => {
    // const {userId } = req.body;
    // const all_expenses = await ExpensesModel.find()
    res.send("all_expenses")
  });


module.exports = expensesRouter;
