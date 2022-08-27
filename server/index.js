const express = require("express");

const connection = require("./config");
const authRouter = require("./controllers/authController");


const expensesRouter = require("./controllers/expenses.routes");


const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("homepage");
});

app.use("/", authRouter);




app.listen(process.env.PORT || 8080, async () => {

  try {
    await connection;
    console.log("database connected");
  } catch (err) {
    console.log(err);
  }
  console.log("listening");
});


