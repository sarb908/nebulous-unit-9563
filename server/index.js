const express = require("express");

const connection = require("./config");
const authRouter = require("./controllers/authController");
const passport = require("./googleAuth");
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("homepage");
});

app.use("/", authRouter);

app.listen(process.env.PORT || 7000, async () => {
  try {
    await connection;
    console.log("database connected");
  } catch (err) {
    console.log(err);
  }
  console.log("listening");
});
