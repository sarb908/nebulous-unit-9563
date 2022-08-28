const express = require("express");

const cors = require("cors");

const connection = require("./config");
const authRouter = require("./controllers/authController");

const productRoutes = require("./middlewares/TimeManage");

const passport = require("./googleauth");

const expensesRouter = require("./controllers/expenses.routes");

const manageRoute = require("./controllers/manageController");
const { authentication } = require("./middlewares/auth");

const app = express();
app.use(cors());
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("homepage");
});

app.use("/", authRouter);
/////////////////////
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    session: false,
  }),
  function (req, res) {
    // Successful authentication, redirect home.
    //console.log(req.user);
    //res.send(req.user);
    res.redirect(
      `http://localhost:3000/google/auth?token=${req.user.token}&img=${req.user.img}`
    );
  }
);

////////

app.use("/time", productRoutes);

app.use("/expenses", expensesRouter)

app.use("/", authRouter);

app.use("/manage", authentication, manageRoute);

app.listen(process.env.PORT || 8080, async () => {
  try {
    await connection;
    console.log("database connected");
  } catch (err) {
    console.log(err);
  }
  console.log("listening");
});
