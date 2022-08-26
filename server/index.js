const express = require("express");
const cors = require('cors')

const connection = require("./config");
const authRouter = require("./controllers/authController");


const expensesRouter = require("./controllers/expenses.routes");
const manageRoute = require("./controllers/manageController");


const app = express();
app.use(express.json());

app.use(cors())
app.get("/", (req, res) => {
  res.send("homepage");
});



app.use("/", authRouter);

app.use("/manage" , manageRoute)

app.listen(process.env.PORT || 8080, async () => {

  try {
    await connection;
    console.log("database connected");
  } catch (err) {
    console.log(err);
  }
  console.log("listening");
});


