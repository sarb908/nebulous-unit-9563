const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  pswd: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
});
const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;
