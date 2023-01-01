const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config()
require("./Category")
require("./Recipe")
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection error: "));
db.once("open", function () {
  console.log("Connected");
});
