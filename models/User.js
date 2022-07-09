const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
  googleId: String,
  email: String,
  username: String,
  password: String,
  mobile: String,
  city: String,
});

userSchema.plugin(passportLocalMongoose);
new mongoose.model("users", userSchema);
