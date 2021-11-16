const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
require("./models/User");
require("./services/authService");

mongoose.connect(keys.mongoUri);

const app = express();

// setup passport to use cookies for user sessions
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());

require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);

// example route handler in express
app.get("/", (req, res) => {
  res.send({ hi: "there!!" });
});

const PORT = process.env.PORT || 5000; // heroku will populate the port dynamically
app.listen(PORT);
