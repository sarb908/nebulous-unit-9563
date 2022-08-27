const express = require("express");

const connection = require("./config");
const authRouter = require("./controllers/authController");
const cors = require("cors")


const expensesRouter = require("./controllers/expenses.routes");
const productRoutes = require("./middlewares/TimeManage");

const app = express();
app.use(express.json());
app.use(cors())
app.get("/", (req, res) => {
  res.send("homepage");
});

app.use("/", authRouter);


app.use("/time", productRoutes);



app.listen(process.env.PORT || 8080, async () => {

  try {
    await connection;
    console.log("database connected");
  } catch (err) {
    console.log(err);
  }
  console.log("listening");
});


