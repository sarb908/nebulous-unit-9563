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
    res.redirect("/dashboard");
  }
);
app.get("/dashboard", (req, res) => {
  res.send("COOL");
});

app.listen(process.env.PORT || 7000, async () => {
  try {
    await connection;
    console.log("database connected");
  } catch (err) {
    console.log(err);
  }
  console.log("listening");
});
