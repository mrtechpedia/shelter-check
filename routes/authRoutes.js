const passport = require("passport");
const mongoose = require("mongoose");
const keys = require("../config/keys");
const e = require("express");

const User = mongoose.model("users");

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

module.exports = (app) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/login");
    }
  );

  app.get("/api/current_user", (req, res) => {
    // console.log(res);
    return res.send({
      user: req.user,
      msg: null,
    });
  });

  app.post("/api/register", async (req, res, done) => {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.json({
        msg: "You are already registered please login",
        user: null,
      });
    }
    //we added a return statement and removed that shitty else because agr user mil gaya to return ho jega aur us return k neeche ka code chlega hi nhi......so we can avoid that else part
    const newUser = await new User({
      email: req.body.email,
      username: req.body.username,
      mobile: req.body.mobile,
      city: req.body.city,
      password: req.body.password,
    }).save();

    return res.json({ msg: null, user: newUser });
  });

  app.post("/api/login", async (req, res, done) => {
    const existingUser = await User.findOne(
      { email: req.body.email, password: req.body.password },
      "username email mobile city"
    ).exec();

    if (existingUser) {
      return res.json({ msg: null, user: existingUser });
    } else {
      return res.json({ msg: "Invalid Credentials", user: null });
    }
  });

  // app.get("/api/logout", (req, res) => {
  //   req.logout();
  //   res.redirect("/");
  // });
};
