const express = require("express");
const mongoose = require("mongoose");

const app = express();

// set the template engine .
app.set("view engine", "ejs");

// Create routes prefix
app.use("", require("./routes/routes"));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
