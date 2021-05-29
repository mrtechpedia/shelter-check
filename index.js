const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const expressSession = require("express-session");
const passport = require("passport");
const keys = require("./config/keys");
require("./models/User");
require("./models/Professional");
require("./services/passport");

const app = express();
const cors = require("cors");

// app.use(
//   expressSession({
//     secret: "Our Little Secret.",
//     resave: false,
//     saveUninitialized: false,
//   })
// );

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, //30 days
    keys: [keys.cookieKey],
    //This is automatically encrypted using this keys property
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(cors());
app.use(express.json());

require("./routes/authRoutes")(app);
require("./routes/registerProRoutes")(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);
