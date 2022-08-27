const express = require("express");
const ExpensesModel = require("../models/Expenses.model");
const expensesRouter = express.Router();

//input part Done
expensesRouter.post("/", async (req, res) => {
  const { projectname, expensee, notes, file, amount, date, userId } = req.body;

  console.log(projectname, expensee, notes, file, amount, date);

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
  return res.send({ message: "expenses created", new_expenses });
});

//append the data done
expensesRouter.get("/", async (req, res) => {
  // const {userId } = req.body;
  const all_expenses = await ExpensesModel.find({});
  res.send(all_expenses);
  // res.send("all_expenses")
});

//its time to edit

expensesRouter.patch("/:id", async (req, res) => {
  const new_expense = await ExpensesModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.send({ message: "successfully updated", new_expense });
});

expensesRouter.delete("/:id", async (req, res) => {
  const new_expense = await ExpensesModel.findByIdAndDelete(req.params.id);
  return res.send({ message: "successfully delete", new_expense });
});

module.exports = expensesRouter;
