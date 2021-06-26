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

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT);
