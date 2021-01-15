const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const allRoutes = require("./routes");

const db = require("./models");
// const { User } = require("./models");

const PORT = process.env.PORT || 5000;

// const User = require("./Models/userModel.js");
const app = express();

// app.use(logger("dev"));

app.use(
  cors({
    origin: [
      "https://repertoire-recipes.herokuapp.com/",
      "http://localhost:3001",
      "http://localhost:3000",
    ],
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use("/", allRoutes);

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/repertoire-recipes",
  {
    useNewUrlParser: true,
  }
);
mongoose.set("useFindAndModify", false);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
